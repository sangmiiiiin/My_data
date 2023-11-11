// 13장 스코프

// 13.1 스코프란?

// 스코프(유효범위) var, let, const 키워드로 선언한 변수의 스코프 다르게 동작


function add(x, y) {
    // 매개변수는 함수 몸체 내부에서만 사용가능.
    // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부.
    console.log(x, y);  // 2, 5
    return x + y;
}

add(2, 5);

// 함수의 매개변수는 함수 몸체 내부에서만 참조할 수 있음  => 이것이 스코프

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y);  // ReferenceError: x is not defined