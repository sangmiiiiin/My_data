// break 문은 레이블 문뿐 아니라 반복문, switch 문에서도 사용할 수 있다. 이 경우에는 break 문에 레이블 식별자를 지정하지 않는다.

var string = 'Hello World.';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
    // 문자열의 개별문자가 'l' 이면
    if(string[i] === 'l') {
        index = i;
        break;  // 반복문을 탈출한다.
    }
}

console.log(index);     // 2