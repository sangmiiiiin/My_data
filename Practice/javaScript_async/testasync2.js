function kim(){
    hong(1000, lee);
    console.log('내 할일 하면 됨.');
};

function hong(money, callback){
    setTimeout(function(){
        let result = money + '원 짜리 콜라';
        callback(result);
    }, money*10);
};

function lee(coke){
    console.log(coke, '맛있게 먹음.');
};

kim();