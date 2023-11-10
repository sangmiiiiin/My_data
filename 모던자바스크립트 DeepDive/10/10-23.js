// 메서드 축약 표현

// ES5에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당한다.

// ES5

var obj = {
    name: "Lee",
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi();