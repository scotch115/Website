const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addMessage = functions.https.onRequest(async (req, res) => {
	const original = req.query.text;
	
	const snapshot = await admin.database().ref('/messages').push({original: original});
	
	res.redirect(303, snapshot.ref.toString());
});

exports.makeUppercase = functions.database.ref('/messages/{pushID}/original')
	.onCreate((snapshot, context) => {
		const original = snapshot.val();
		console.log('Uppercasing', context.params.pushID, original);
		
		const uppercase = original.toUpperCase();
		
		return snapshot.ref.parent.child('uppercase').set(uppercase);
	});











// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const path = require('path');
// const express = require('express');
// const router = express.Router();
// const app = express();
// const port = process.argv[2] || 8080;
// 
// const mimeType = {
// 
// 
//   '.ico': 'image/x-icon',
//   '.html': 'text/html',
//   '.js': 'text/javascript',
//   '.json': 'application/json',
//   '.css': 'text/css'
// };
// 
// const server = http.createServer(function(req, res) 
// {
//   var path = url.parse(req.url).pathname;
//   switch (path) {
//     case '/':
//       res.statusCode = 200;
//       res.writeHead(200, {
//         'Content-Type': 'text/html'
//       });
//       fs.readFile('./landing.html', null, function(error,data){
//         if (error){
//           res.writeHead(404);
//           res.write("Uh oh! That webpage doesn't exist! :/ \n");
//         } else {
//           res.write(data);
//         }
//         res.end();
//      });
//      break;
// 
//     case '/about':
//     fs.readFile('./about.html', function(error, data){
//       if (error) {
//         res.writeHead(404);
//         res.write(error);
//         res.end();
//       } else {
//         res.writeHead(200, {
//           'Content-Type': 'text/html'
//         });
//         res.write(data);
//         res.end();
//       }
//     });
//     break;
// 
//     case '/services':
//     fs.readFile('./services.html', function(error, data){
//       if (error) {
//         res.writeHead(404);
//         res.write(error);
//         res.end();
//       } else {
//         res.writeHead(200, {
//           'Content-Type': 'text/html'
//         });
//         res.write(data);
//         res.end();
//       }
//     });
//     break;
// 
//     case '/contact':
//     fs.readFile('./contact.html', function(error, data){
//       if (error) {
//         res.writeHead(404);
//         res.write(error);
//         res.end();
//       } else {
//         res.writeHead(200, {
//           'Content-Type': 'text/html'
//         });
//         res.write(data);
//         res.end();
//       }
//     });
//     break;
// 
//   default:
//     res.writeHead(404);
//     res.write("Uh oh, this doesn't look right...");
//     res.end();
//     break;
//     }
//  }).listen(port);
// 
// console.log('Server Listening on port 8080!');
// 
// // {sudo birthday}
// // lol what does that mean? ^
// 
