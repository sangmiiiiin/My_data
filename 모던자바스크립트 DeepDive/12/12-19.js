function add(x, y) {
    return x + y;
}

console.log(add(2, 5, 10)); // 7

// 초과된 인수는 사실 그냥 버려지는 것은 아니고 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.(?)

