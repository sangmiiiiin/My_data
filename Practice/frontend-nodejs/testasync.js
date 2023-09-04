function kim(){
    hong(1000, function(coke){
        lee(coke);
        hong(500, function(coke){
            lee(coke);
            hong(300, function(coke){
                lee(coke);
                hong(100, function(coke){
                    lee(coke);
                });
            });
        });
    });
    console.log('내 할일 하면 됨.');
}

function hong(money, callback){
    setTimeout(function(){
        let result = money + ' 원 짜리 콜라';
        callback(result);
    }, money*10);
}
function lee(coke){
    console.log(coke, '맛있게 먹음.')
}

kim();
