console.log(1);
console.log(2);
setTimeout(function(){console.log(3);},5000);       // 5초가 지난 후에 콘솔로그 실행
console.log(4);                                     // 4가 기다리지 않고 먼저 실행됨

// 어떤 함수를 사용하는데 그 리턴값이 Promise라면 그 함수는 비동기적으로 동작하는 함수일 가능성이 매우 높다.
// 그 함수가 리턴한 값은 두개의 메소드를 사용하는데 하나는 then, 하나는 catch 둘다 콜백함수를 받고 파라미터를 하나씩 갖는다.
