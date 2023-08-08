function kim(){
    const coke = hong(1000);
    lee(coke);
  }
  function hong(money){
    let result = money + '원 짜리 콜라';
    return result;
  }
  function lee(coke){
    console.log(coke, '맛있게 먹음.')
  }
  
  kim();