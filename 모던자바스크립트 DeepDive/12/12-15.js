// 화살표 함수

const add = (x, y) => x + y;
console.log(add(2, 5)); // 7s

// 화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화.
// 화살표 함수는 생성자 함수로 사용할 수 없으며, 기존 함수와 this 바인딩 방식이 다르고
// prototype 프로퍼티가 없으며(?) arguments 객체를 생성하지 않는다 (?)
// 화살표 함수에 대해서는 먼저 생성자 함수, this.프로토타입, arguments 객체를 살펴본 후 자세히...

