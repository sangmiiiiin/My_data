// var, function 같은 예약어를 프로퍼티 키값으로 사용해도 에러 발생하지 않지만 권장하지 않음

var foo = {
    var: '',
    function: ''
};

console.log(foo);