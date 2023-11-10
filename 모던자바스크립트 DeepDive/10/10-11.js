// 자바스크립트의 함수 : 일급 객체
// 함수는 값으로 취급할 수 있다 => 프로퍼티 값으로 사용가능
// 일반 함수와 구분하기 위해 메서드(method)라 불린다.
// 즉, 메서드는 객체에 묶여있는 함수를 말한다.

var circle = {
    radius: 5, // <-프로퍼티

    // 원의 지름
    getDiameter: function () {
        return 2 * this.radius  // <-메서드
    }
};

console.log(circle.getDiameter())   // 10

// 메서드 내부에서 사용한 this 키워드는 객체 자신을 가리키는 참조변수다.

