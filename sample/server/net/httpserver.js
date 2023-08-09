const net = require('node:net');  // 노드 붙여도되고 안 붙여도 됨
const fs = require('node:fs');
const path = require('node:path');

// connectionListenser 등록
const tcpServer = net.createServer(function(socket){            // socket 객체는 전화기다 마이크로 정보 보내고 스피커로 정보 받을수도 있는..
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
                socket.write('HTTP/1.1 200 OK\n');
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
    // Connection: keep-alive
    // ...

    const req = {
        headers: {}                 // 헤더 객채 생성
    };
    
    let arr = data.split('\n');                 // split 함수를 이용하여 줄 바꾸기
    let startLine = arr.shift().split(' ');     // ['GET', '/', 'HTTP/1.1']
    req.method = startLine[0];                  // GET
    req.url = startLine[1];                     // /(URL 주소)
    req.httpVersion = startLine[2];             // HTTP/1.1

    for(let header of arr){                     // of 뒤에 있는 배열들을 반복 => i값이 필요없다면 코드가 간단해진다
        if(header.trim() != ''){                // header와 body를 구분짓는 빈줄이 있다 => header가 끝났다
            let parseHeader = header.split(':');
            let name = parseHeader[0].trim().toLowerCase();
            let value = parseHeader[1];
            req.headers[name] = value;          // 객체 접근시 .name하면 변수로 인식하지 않음
        }else{
            break;
        }
    }

    return req;
}

tcpServer.listen(80, function(){
    console.log('HTTP 서버구동.');
});