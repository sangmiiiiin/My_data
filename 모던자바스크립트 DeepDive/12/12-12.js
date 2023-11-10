// 함수 참조
console.dir(add);   // f add(x, y)
console.dir(sub);   // undefined => 함수 호이스팅이 아닌 변수 호이스팅이 일어나고 var 키워드로 선언된 변수는 undefined로 초기화 되기 때문에 
                    // 함수 표현식 이전에 참조시 undefined를 참조 하는것과 같다

// 함수 호춣
console.log(add(2, 5)); // 7
// console.log(sub(2, 5));  // TypeError: sub is not a function

// 함수 선언문
function add (x, y) {
    return x + y;
};

// 함수 표현식
var sub = function(x, y) {
    return x - y;
};

// 위 예제와 같이 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다. 
// 그러나 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.
// 이는 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 함수 생성 시점이 다르기 때문.

// 모든 선언문이 그렇듯 함수 선언문도 코드가 한 줄씩 순차적으로 실행되는 시점인 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행된다.
// 함수 선언문으로 함수를 정의하면 런타임 이전에 함수 객체가 먼저 생성된다.
// 그리고 자바스크립트 엔젠은 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고 생성된 함수 객체를 할당한다.

// 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅이라 한다.

// 함수 선언문보다 함수 표현식을 사용할 것을 권장.