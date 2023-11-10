// Function 생성자 함수로 생성한 함수는 클로저를 생성하지 않는 등, 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.

var add1 = (function () {
    var a = 10;
    return function(x, y) {
        return x + y + a;
    };
}());

console.log(add1(5, 6));    // 21

var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());

console.log(add2(1, 2));    // ReferenceError: a is not defined

// 클로저는 아직 살펴보지 않은 내용이다.
// 함수 선언문 or 표현식으로 생성한 함수와 Function 생성자 함수로 생성한 함수가 동일하게 동작하지 않는다.
