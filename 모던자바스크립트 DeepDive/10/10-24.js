// ES6에서는 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.
// 보니까 프로퍼티 키값도 생략이 가능하다 그냥 함수를 적어넣으면 함수이름이 자동으로 프로퍼티 키에 할당되는듯.

// ES6

const obj = {
    name: 'Lee',
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi();

