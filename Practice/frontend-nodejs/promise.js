console.log(1);
console.log(2);
setTimeout(function(){console.log(3);},5000);       // 5초가 지난 후에 콘솔로그 실행
console.log(4);                                     // 4가 기다리지 않고 먼저 실행됨
