const path = require('node:path');
const url = require('node:url');
const fs = require('node:fs');
const mime = require('mime');

// 정적인 컨텐츠를 응답
// connect용 미들웨어 조건
// 1. req, res, next를 전달받는다.
// 2. 필요한 작업 수행
// 3. res로 클라이언트에 응답하거나 다음 미들웨어(next())를 호출 => 세번째 인자값으로 지정된 함수를 호출
function staticServer(req, res, next){
    console.log(req.method, req.url, req.httpVersion);
    console.log(req.headers['user-agent']);
    if(req.url == '/'){
        req.url = '/index.html';
    }

    let parseUrl = url.parse(req.url);
    let pathname = parseUrl.pathname;
    let filename = path.join(base, pathname);
    let mimeType = mime.getType(req.url);

    fs.stat(filename, function(err, status){
        if(err){
            next();
        }else if(status.isDirectory()){
            let error = new Error(`디렉토리 접근 금지됨.`);
            error.status = 403;     
            next(error);
        }else{
            res.writeHead(200, {'Content-Type': mimeType + ';charset=utf-8'});
            fs.createReadStream(filename).pipe(res);
        }
    });
}

let base;
module.exports = function(dir){
    base = dir;
    return staticServer;
}