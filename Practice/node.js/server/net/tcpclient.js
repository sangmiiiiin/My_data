const net = require('net');
var target = {
    // host: '106.246.114.78'.
    // port: 33112
    host: 'google.com',
    port: 80
};
// let socket = new net.Socket();
const socket = net.createConnection(target.port, target.host, function(){
    console.log(`서버 접속. ${target.host}:${target.port}`);
    socket.write('GET / HTTP /1.1\n\n');
});
socket.on('error', (err)=>{ console.error(err) });
socket.on('data', function(data){
    console.log(`서버 메시지: ${data.toString()}`);
});

// 표준 입력장치로부터 메시지를 읽어서 서버에 전송
process.stdin.pipe(socket);
// process.stdin.on('data', function(data){
//  sokect.write(data);
//  });