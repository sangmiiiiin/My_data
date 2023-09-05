async function kim(){
    let coke = await hong(1000);
    console.log('내 할일 하면 됨.');
    lee(coke);
}

function hong(money){
    return new Promise(function(success, fail){
        setTimeout(function(){
            let result =  money + '원 짜리 콜라';
            success(result);
        }, money*10);
    });
}
function lee(coke){
    console.log(coke, '맛있게 먹음.')
}

kim();