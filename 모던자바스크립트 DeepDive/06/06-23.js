var foo; // undefined
console.log(typeof foo);

foo = 3; // 숫자
console.log(typeof foo);

foo = 'Hello';  // 문자
console.log(typeof foo);

foo = true; // 불리언
console.log(typeof foo);

foo = null; // object
console.log(typeof foo);

foo = Symbol(); // symbol
console.log(typeof foo);

foo = {}; // 객체
console.log(typeof foo);

foo = []; // 배열
console.log(typeof foo);

foo = function() {}; // 함수
console.log(typeof foo);