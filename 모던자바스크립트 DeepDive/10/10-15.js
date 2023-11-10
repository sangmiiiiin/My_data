var person = {
    'last-name': 'Lee',
    1: 10,
};

console.log(person['1']);
console.log(person['last-name']);

console.log(person[last-name]); // 자바스크립트 식별자 네이밍 규칙을 따르지 않고 - 를 연산자로 인식 하기때문에 Reference Error 가 발생한다.
console.log(person[1]); // Error가 나지 않는다 숫자열은 문자열로 암묵적 타입변환이 이뤄지기 때문. 하지만 참조시에는 대괄호안에 넣어줘야한다



console.log(person.'last-name');
console.log(person.last-name)   // 브라우저 환경: NaN
                                // Node.js 환경 : Reference Error
console.log(person[last-name]); // Reference Error
console.log(person['last-name']);   // Lee

console.log(person.1); // Syntax Error
console.log(person.'1');    // Syntax Error
console.log(person[1]); // 10
console.log(person.['1']);  // 10


// 브라우저 환경에서 person.last-name이 NaN으로 나오는 이유
// Js엔진은 먼저 person.last 값을 평가한다. person 객체에 last인 프로퍼티가 없어서 undefined
// person.last-name은 undefined - name과 같음

// Node.js에는 name이라는 식별자(변수, 함수등의 이름) 선언이 없기 때문에 Reference Error 발생
// 브라우저 전역 변수(전역객체 window의 프로퍼티) name이 암묵적으로 존재
// name의 값은 빈 문자열
// person.last-name = undefined - '' => NaN 반환