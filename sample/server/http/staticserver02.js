// const mime = {
//   'html': 'text/html',
//   'svg': 'image/svg+xml',
//   'jpg': 'image/jpeg',
//   'png': 'image/png',
//   'gif': 'image/gif',
//   'css': 'text/css',
//   'js': 'application/javascript'
//   // ......
// };

function getMime(url){
  let extname = path.extname(url).substring(1);
  return mime[extname];
}

const http = require('node:http');  
const fs = require('node:fs');
const path = require('node:path');
const mime = require('mime');

// requestListenser 등록
const httpServer = http.createServer(function(req, res){
    console.log(req.method, req.url, req.httpVersion);
    console.log(req.headers['user-agent']);

    if(req.url == '/'){
        req.url = '/index.html';
    }

    let filename = path.join(__dirname, req.url);
    let mimeType = mime.getType(req.url);
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});       // 시작값을 전달하는 구문
            res.write(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
            res.end();
        }else{
            res.writeHead(200, {'Content-Type': mimeType + ';charset=utf-8'});
            res.end(data);
        }
    });
});

httpServer.listen(80, function(){
    console.log('HTTP 서버구동.');
});

