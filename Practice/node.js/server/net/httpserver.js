const net = require('net');
const fs = require('fs');
const path = require('path');

// connectionListener 등록
const tcpServer = net.createServer(function(socket){
    console.log(socket.remoteAddress, '접속함.');
    // error 이벤트를 필수로 처리해야 한다.
    socket.on('error', function(){
        console.log(socket.remoteAddress, '접속 종료.');
    });

    // 클라이언트로부터 메시지가 도착하면
    socket.on('data', function(data){
        console.log(data.toString());
        const req = parseRequest(data.toString());
        console.log(req.method, req.url, req.httpVersion);
        console.log(req.headers['user-agent']);

        if(req.url == '/'){
            req.url = '/index.html';
        }

        let filename = path.join(__dirname, req.url);
        fs.readFile(filename, function(err, data){
            if(err){
                socket.write('HTTP/1.1 404 Not found\n');
                socket.write('Content-Type: text/html;charset=utf-8\n');
                socket.write('\n');
                socket.write(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
                socket.end();
            }else{
                socket.write('HTTP/1.1 200 ok\n');
                socket.write('Content-Type: text/html;charset=utf-8\n');
                socket.write('\n');
                socket.end(data);
            }
        });
    });
});

function parseRequest(data){
    // GET / HTTP/1.1
    // Host: localhost
    // Connetion: keep-alive
    // ...
    const req = {
        headers: {}
    };
    let arr = data.split('\n');
    // ['GET', '/', 'HTTP/1.1']
    let startLine = arr.shift().split(' ');
    req.method = startLine[0];
    req.url = startLine[1];
    req.httpVersion = startLine[2];
    for(let header of arr){
        if(header.trim() != ''){
            let parseHeader = header.split(':');
            let name = parseHeader[0].trim().toLowerCase();
            let value = parseHeader[1].trim();
            req.headers[name] = value;
        }else{
            break;
        }
    }
    return req;
}

tcpServer.listen(80, function(){
    console.log('HTTP 서버 구동.');
});