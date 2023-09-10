const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const url = require('url');

const mime = require('mime');
// 로그 파일
const logfile = fs.createWriteStream('mylog.log', { flags: 'a' });
// 정적인 컨텐츠를 응답
function staticServer(req, res){
  console.log(req.method, req.url, req.httpVersion);
  console.log(req.headers['user-agent']);
  if(req.url == '/'){
    req.url = '/index.html';
  }

  let parseUrl = url.parse(req.url);
  let pathname =parseUrl.pathname;
  let filename = path.join(__dirname, pathname);
  let mimeType = mime.getType(req.url);
  fs.stat(filename, function(err, status){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
    }else if(status.isDirectory()){
      res.writeHead(403, {'Content-Type': 'text/html;charset=utf-8'});
      res.end(`<h1>디렉토리 접근 금지됨.</h1>`);
    }else{
      res.writeHead(200, {'Content-Type': mimeType + ';charset=utf-8'});
      fs.createReadStream(filename).pipe(res);
    }
    // 로그 메시지 출력
    logfile.write(`[${Date()}] ${res.statusCode} ${req.url}${os.EOL}`);
  });
}

// requestListener 등록
const httpServer = http.createServer(staticServer);

httpServer.listen(80, function(){
  console.log('HTTP 서버 구동.');
});