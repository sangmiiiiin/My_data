console.log('전형적인 코어 모듈의 exports 방식');
const someObj = {
  createServer: function(requestListener){
    // 클라이언트의 요청정보를 분석해서 request 객체를 생성
    // ...
    requestListener({ url: '/hello.html' }, {
      writeHead: function(statusCode, headers){
        console.log('브라우저에 헤더 전달');
        console.log(statusCode, headers);
      },
      write: function(data){
        console.log('브라우저에 바디 전달');
        console.log(data);
      },
      end: function(data){
        console.log(data);
        console.log('응답이 완료됨을 나타내는 신호 전송.');
      }
      // ...
    });

    return {
      listen: function(port, listeningListener){
        console.log(port, '포트로 서버 구동 시도.');
        listeningListener();
      }
    };
  },
  readFile: function(filename, callback){
    // filename의 파일을 읽어서 callback의 인자값으로 전달
    // ...
    console.log(filename, '읽기 작업.');
    callback(new Error('에러 발생!!!'));
    callback(null, '읽은 파일 내용.');
  },
  join: function(...args){
    let result  = args.shift();
    for(let i=0; i<args.length; i++){
      result += require('path').sep + args[i];
    }
    return result;
  }
};

module.exports = someObj;