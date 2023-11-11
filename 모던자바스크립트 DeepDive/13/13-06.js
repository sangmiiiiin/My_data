// 13.2 스코프의 종류

// 코드는 전역(global)과 지역(local)으로 구분할 수 있다.
// 전역변수는 어디서든지 참조할 수 있다.
// 함수 내부에서도 참조할 수 있다.

// 13.2.2 지역과 지역 스코프
// 지역이란 함수 몸체 내부 => (그냥 코드 블록은 전역인가??)

// 지역변수는 자신의 지역스코프와 하위 지역 스코프에서 유효하다!!!


var x = "global x";
var y = "global y";

function outer() {
    var z = "outer's local z";

    console.log(x); // 1.global x
    console.log(y); // 2.global y
    console.log(z); // 3.outer's local z

    function inner() {
        var x = "inner's local x";

        console.log(x); // 4.inner's local x
        console.log(y); // 5.global y
        console.log(z); // 6.outer's local z
    }

    inner();
}

outer();

console.log(x)  // 7.global x
console.log(z)  // 8.ReferenceError: z is not defined