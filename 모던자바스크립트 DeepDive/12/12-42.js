// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있고 인수를 전달할 수도 있다.

var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res); // 15

res = (function (a, b) {
    return a * b;
}(3, 5));

console.log(res);   // 15

// 즉시 실행 함수 내에 코드를 모아 두면 혹시 있을 수도 있는 변수나 함수 이름의 충돌읇 방지할 수 있다.
// 이에 대해서는 스코프를 살펴보고 "전역 변수의 사용을 억제하는 방법"에서....
