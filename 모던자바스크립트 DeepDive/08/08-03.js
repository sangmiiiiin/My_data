// 코드 블록 내에 문이 하나라면 중괄호를 생략 가능

var num = 0;
var kind;

if (num > 0) kind = '양수'
else if (num < 0) kind = '음수'
else kind = '영'

console.log(kind);