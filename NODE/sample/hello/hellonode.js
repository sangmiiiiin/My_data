const helloMessage = 'Hello ';

function hello(msg){
  return helloMessage + msg;
}

// console.log(hello('Node'));

// require()의 리턴값이 된다.
// module.export = {};  // 기본값은 빈 객체
module.exports = {
  hi: hello,
  msg: helloMessage
};