// 함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다. 에러발생도 안한다
// 인수가 부족해 할당되지 않은 매개변수의 값은 undefined

function add(x, y) {
    return x + y;
}

console.log(add(2)); // NaN => 2 + undefined이기 때문에,

// 매개변수보다 인수가 많은 경우 초과된 인수는 무시된다.





