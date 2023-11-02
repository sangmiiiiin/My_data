var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';   // 1은 True, 0는 False 물음표 앞 조건식의 결과가 0이기 때문에 마지막항의 짝수가 할당된다.
console.log(result);