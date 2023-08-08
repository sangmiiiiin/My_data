const http = require('node:http');
const static = require('node-static');
const path = require('node:path');

const file = new static.Server(path.join(__dirname, 'public'));
http.createServer(function(req, res){
  file.serve(req, res);
}).listen(33123, function(){
  console.log('Start static web server');
});