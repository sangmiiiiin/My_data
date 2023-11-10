// 반환문의 두가지 역할

// 첫째, 함수의 실행을 중단하고 함수 몸체를 빠져나간다. 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.

function multiply(x, y) {
    return x * y;   // 반환문
    // 반환문 이후에 다른문이 존재하면 그 문은 실행되지 않고 무시된다.
    console.log('실행되지 않는다.');
}

console.log(multiply(3, 5)); // 15

// 둘째, 반환문은 return 키워드 뒤에 오는 표현식을 평가해 반환한다.
// return 키워드 뒤에 반환값으로 사용 할 표현식을 명시적으로 지정하지 않으면 undefined가 반환된다.

function foo () {
    return;
}

console.log(foo()); // undefined