const helloMessage = 'Fucking Hello';

function hello(msg){
  return helloMessage + msg;
}

// console.log(hello('Node'));

// require()의 리턴값이 된다.
// module.export = {};  // 기본값은 빈 객체
module.exports = {
  hi: hello,            // 함수를 할당
  msg: helloMessage     // 변수를 할당
};  