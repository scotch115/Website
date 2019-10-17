const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const server = express()

const port = process.argv[2] || 8080;

const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css'
};

http.createServer(function (req, res) {
  console.log('${req.method} ${req.url}');
  
    router.get('/', function(req,res){
    res.render('landing', {
      title: 'Home'
    });
  });

  router.get('/about', function(req, res){
    res.render('about', {
      title: 'About'
    });
  });

  router.get('/contact', function(res,req){
    res.render('contact', {
      title: 'Contact'
    });
  });

  module.exports = router;
   
  const parsedUrl = url.parse(req.url);
  
  const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
  let pathname = path.join(__dirname, sanitizePath);
    var pathname = './landing.html';
  fs.exists(pathname, function (exist) {
    if(!exist) {
      res.statusCode = 404;
      res.end('File ${pathname} not found!');
      return;
    }
    
    if (fs.statSync(pathname).isDirectory()) {
    pathname = './${pathname}';
    }
    fs.readFile(pathname, function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        const ext = path.parse(pathname).ext;
        res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
        res.end(data);
      }
    });
  });

}).listen(parseInt(port));

console.log('Server Listening on port 8080!');