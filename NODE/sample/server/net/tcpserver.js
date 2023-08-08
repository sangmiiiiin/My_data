const net = require('node:net');  // 노드 붙여도되고 안 붙여도 됨

// connectionListenser
const tcpServer = net.createServer(function(socket){            // socket 객체는 전화기다 마이크로 정보 보내고 스피커로 정보 받을수도 있는..
    console.log(socket.remoteAddress, '접속함.');
    // error 이벤트를 필수로 처리해야 한다.
    socket.on('error', function(){
        console.log(socket.remoteAddress, '접속 종료.');
    });

    // 클라이언트로부터 메시지가 도착하면
    socket.on('data', function(data){
        console.log(data.toString());
        // 클라이언트로 메시지 전송
        socket.write(data);
    });
});

tcpServer.listen(33112, function(){
    console.log('TCP 서버구동.');
});