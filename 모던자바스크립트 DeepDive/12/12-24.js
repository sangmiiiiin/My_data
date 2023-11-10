function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1, 2, 3));  // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0

// 인수가 전달되지 않은 경우 단축 평가를 사용해 매개변수에 기본값을 할당하는 방법