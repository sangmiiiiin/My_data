// 팩토리얼은 재귀함수로 간단하게 구현 가능.

// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 ... * (n - 1) * n


function factorial(n) {
    if (n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n - 1);
}


console.log(factorial(0));  // 0! = 1
console.log(factorial(1));  // 1! = 1
console.log(factorial(2));  // 2! = 2 * 1 = 2
