// ES6에서 도입된 매개변수 기본값을 사용하면 함수내에서 수행하던 인수 체크 및 초기화를 간소화 할 수있다.
// 매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우와 undefined를 전달한 경우에만 유효하다.

function add(a = 0, b = 0, c = 0) {
    return a + b + c;
}

onsole.log(add(1, 2, 3));  // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0