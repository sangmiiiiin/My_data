// return 키워드와 반환값으로 사용할 표현식 사이에 줄바꿈이 있으면 세미콜론 자동 삽입 기능에 의해 세미콜론이 추가되어 의도치 않은 결과 발생

function multiply (x, y) {
    return  // 세미콜론 자동 삽입(ASI)에 의해 세미콜론이 추가된다.
    x + y;  // 무시된다.
}

console.log(multiply(2, 3));        // undefined


