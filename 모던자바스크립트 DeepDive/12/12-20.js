function add(x, y) {
    console.log(arguments);
    // Arguments(3) [2, 5, 10, callee: f, Symbol(Symbol.iterator): f] 책에는 이렇게 나옴
    // 실제로: [Arguments] { '0': 2, '1': 5, '2': 10 } 찍힘

    return x + y;
}

add(2, 5, 10);

// arguments 객체는 함수를 정의할 때 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하게 사용된다.
