var score = 80;

// copy 변수에는 score 변수의 값이 복사되어 할당한다.

var copy = score;

console.log(score, copy);   // 80 80
console.log(score === copy);    // true

// 이때 score 변수와 copy 변수는 숫자 값 80을 갖는다는 점에서 동일
// 하지만 score 변수와 copy 변수의 값 80은 다른 메모리 공간에 저장된 별개의 값