// 12.7.2 재귀함수

// 함수가 자기 자신을 호출하는 것을 재귀 호출 이라 한다.
// 재귀 함수는 자기 자신을 호출 하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.

// 재귀 함수는 반복되는 처리를 위해 사용한다. 예를 들어 10부터 0까지 출력하는 함수를 구현해보자

// 반복문을 통한 구현
function countDown(n) {
    for (var i = n; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);

// 재귀함수로 구현

function countDown(n) {
    if (n < 0) return;      // 중괄호 생략
    console.log(n);
    countDown(n - 1); // 재귀 호출
}

 countDown(10);

 // 자기 자신을 호출하는 재귀 함수를 사용하면 반복되는 처리를 반복문 없이 구현할 수 있다.
 

