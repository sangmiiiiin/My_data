// 11.1.3 값에 의한 전달

var score = 80;
var copy = score;

console.log(score);
console.log(copy);

score = 100;

console.log(score);
console.log(copy);

// 변수에 변수를 할당했을 때 무엇이 어떻게 전달되는가?
// score는 80이고 copy는 score를 가르킨다.
// score에 100을 재할당 하고 copy를 참조하면 여전히 80을 출력한다.
// 변수에 원시 값을 갖는 변수를 할당하면 할당받는 변수(copy)에는 할당되는 변수(score)의 원시값이 복사되어 전달된다.
// => 값에 의한 전달