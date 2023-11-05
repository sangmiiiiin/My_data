var done = false;
var message = '';

// 주어진 조건이 false 일때
if (!done) message = '미완료';

console.log(message);

// if 문은 단축평가로 대체 가능하다.
// done 이 false 라면 message에 '미완료'를 할당

message = done || '미완료';
console.log(message);