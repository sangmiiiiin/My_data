// 변수는 코드 가장 바깥 영역, 코드블록, 함수 몸체 내에서도 선언 가능.

var var1 =  1;  // 코드 가장 바깥 영역에서 선언한 변수

if (true) {
    var var2 = 2;   // 코드 블록 안에서 선언한 변수
    if (true) {
        var var3 = 3;   // 중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo () {
    var var4 = 4;   // 함수 내에서 선언한 변수

    function bar () {
        var var5 = 5;   // 중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1);  // 1
console.log(var2);  // 2
console.log(var3);  // 3   
console.log(var4);  // ReferenceError: var4 is not defined
console.log(var5);  // ReferenceError: var5 is not defined

// 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
// 이를 스코프라 한다.

