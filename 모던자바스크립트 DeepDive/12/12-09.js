var add = function add (x, y) {
    return x + y;
};

console.log(add(2, 5)); // 7

// 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.
// add 는 식별자, 자바스크립트가 암묵적으로 함수이름을 식별자로 사용한다.