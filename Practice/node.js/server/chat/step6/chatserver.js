function server(io){
  // 클라이언트가 접속할 때 호출
  io.on('connection', function(socket){
    //클라이언트가 접속을 종료 할 때 호출
    socket.on('disconnect', function(){
      io.emit('toclient', `시스템: ${socket.nickname}님이 나갔습니다.`);
    });
    // 로그인 메시지 전달(직접 정의한 이름)
    socket.on('login', function(nickname){
      socket.nickname = nickname || 'Guest';
      io.emit('toclient', `시스템: ${socket.nickname}님이 들어왔습니다.`);
    });
    // 채팅 메세지 전달(직접 정의한 이름)
    socket.on('chat', function(msg){
      io.emit('toclient', `${socket.nickname}: ${msg}`);
    });
  });
}

module.exports = server;