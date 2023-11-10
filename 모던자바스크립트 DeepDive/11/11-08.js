var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.

var copy = score;

console.log(score, copy); // 80 80
console.log(score === copy); // true

// score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
// 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy);   // 100 80
console.log(score === copy); // false

// 두 변수의 원시값은 서로 다른 메모리 공간에 저장된 별개의 값이 되어 어느 한쪽에서 재할당을 통해 값을 변경하더라도 서로 간섭할수 없다

var math = 80;
var grade = math;

console.log(math, grade);   // 80 80

var math = 100;

console.log(grade); // 80

// math에 100을 재할당 하였고 grade는 80이라는 값을 다른 메모리 주소에 가지고 있기때문에 간섭받지 않고 그대로 80을 출력한다.

let a = 1;
a = 2;
// let a = 3;   // Error

console.log(a);

// const b = 1;
// b = 2;
// const b = 2;


