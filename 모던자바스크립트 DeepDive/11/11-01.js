// 내가 이해한것

// var a = 1;
// console.log(a);
// var a = 2;
// console.log(a);
// 재선언, 재할당 모두 가능

let a = 3;
console.log(a);     // var a가 주석처리 되지 않았을때, SyntaxError: identifier 'a' has already been declared

a = 4;              // 재할당 가능
console.log(a);


const b = 5;        // 재선언, 재할당 모두 불가능 => 상수

// b = 6;           // TypeError: Assignment to constant variable.

// [예제 11-01]

// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용한 변수에 할당한 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.

o.a = 999;

console.log(o.a);

// 상수는 단 한번만 할당이 허용되므로 변수 값을 변경(교체)할 수 없다.
// 따라서 상수와 변경 불가능한 값을 동일시 하는건 곤란, 상수는 재할당이 금지된 변수일 뿐
// 변경 불가능한 값 = 원시 데이터 타입(숫자열, 문자열, 불리언, null, undefined, 심벌)