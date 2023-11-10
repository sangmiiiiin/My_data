// 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다. 즉, 매개변수의 스코프(유효 범위)는 함수 내부이다.
// 스코프에 대해서는 13장 "스코프"에서 자세히 알아보자

function add(x, y) {
    console.log(x, y);  // 7 9
    return x + y;
}

add(2, 5);

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y);  // ReferenceError: x is not defined