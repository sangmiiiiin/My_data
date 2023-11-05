var str = '';

// 문자열의 길이(length)를 참조한다. 이 때 좌항 피연산자가 false로 평가되는 Falsy 값이라도
// null 또는 undefined가 아니면 우항의 프로퍼티를 참조를 이어간다.
var length = str?.length;
console.log(length);    // 0 만약 falsy값이여도 null이나 undefined가 아니기 때문에 우항의 문자열 길이를 반환한다.