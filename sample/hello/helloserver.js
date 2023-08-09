const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
// const http = require('../modules/custom/module02/m4');
// const fs = require('../modules/custom/module02/m4');
// const path = require('../modules/custom/module02/m4');

const hellonode = require('./hellonode');

console.log(hellonode.msg);
console.log(hellonode.hi('Web Server!!!'));

// ['node' 'helloserver' '33111']
const port = process.argv[2] || 33123;

// requestListener
http.createServer(function(req, res){
  fileServe(req, res);
}).listen(port, function(){
  console.log('Start HTTP Server.', port);
});

function fileServe(req, res){
  let filename = req.url.substring(1);
  filename = path.join(__dirname, 'public', filename);

  // 동기 방식
  // try{
  //   let data = fs.readFileSync(filename);
  //   res.writeHead(200);
  //   res.end(data);
  // }catch(err){
  //   console.error(err);
  //   res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
  //   res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
  // }

  // 비동기 방식
  fs.readFile(filename, function(err, data){
    if(err){
      console.error(err);
      res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다!!!.</h1>`);
    }else{
      console.log(data.length/1024 + 'KB');
      res.writeHead(200);
      res.write(data);
      res.end();
    }
  });
}