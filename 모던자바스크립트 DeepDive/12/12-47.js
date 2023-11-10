// 대부분의 재귀 함수는 for문이나 while 문으로 구현 가능하다.

function factorial(n) {
    if (n <= 1) return 1;

    var res = n;
    while(--n) res *= n;
    return res;
}

console.log(factorial(0));