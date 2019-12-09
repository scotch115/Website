// For running/testing using play.js on iPad
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();


const port = process.argv[2] || 8080;

const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css'
};

/* const server = http.createServer(function(req, res) 
{
  var path = url.parse(req.url).pathname;
  switch (path) {
    case '/':
      res.statusCode = 200;
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      fs.readFile('./public/index.html', null, function(error,data){
        if (error){
          res.writeHead(404);
          res.write("Uh oh! That webpage doesn't exist! :/ \n");
        } else {
          res.write(data);
        }
        res.end();
     });
     break;
      
  default:
    res.writeHead(404);
    res.write("Uh oh, this doesn't look right...");
    res.end();
    break;
    }
 }).listen(port);
 
console.log('Server Listening on port 8080!');
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true });

app.get('/api/hello', (req, res) => {
