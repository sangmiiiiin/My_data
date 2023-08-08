const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const port = process.argv[2] || 33123;

const server = new http.Server();
server.on('request', fileServe);
server.on('listening', () => console.log('Start HTTP Server.', port));
server.listen(port);

function fileServe(req, res){
  let filename = req.url.substring(1);
  filename = path.join(__dirname, 'public', filename);

  // 스트림 방식
  let filestream = fs.createReadStream(filename);
  filestream.on('error', function(err){
    console.error(err);
    res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
    res.end(`<h1>${req.url} 파일을 찾을 수 없습니다!!!.</h1>`);
  });
  filestream.on('open', function(){
    res.writeHead(200);
  });
  filestream.pipe(res);
  // filestream.on('data', function(data){
  //   // console.log(data.length/1024 + 'KB');
  //   res.write(data);
  // });
  filestream.on('close', function(){
    res.end();
  });
}
