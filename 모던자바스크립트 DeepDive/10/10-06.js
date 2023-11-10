// 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다.
// 이 경우에는 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 한다.

var obj = {};
var key = 'Hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'World!';
// ES6: 계산된 프로퍼티 이름

console.log(obj); // {hello: "World!"}

var obj = {};
var key = 'Hello';
obj[key] = 'World!';

console.log(obj);