// 계산된 프로퍼티 이름

// ES5 
var prefix = 'prop';
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj);   // { 'prop - 1': 1, 'prop - 2': 2, 'prop - 3': 3}

// ES5 에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 객체 리터럴 외부에서 대괄호([...]) 표기법을 사용해야 한다.




