    // 표준 입력 장치로 부터 데이터가 입력
    // process.stdin.addListener('data', function(data){

    process.stdin.on('data', function(data){
    data = data.toString();

    // 표준 출력장치로 출력한다.
    process.stdout.write(`${data}${require('os').EOL}`);
    console.log(data);
});

    // 파일로부터 (표준입력장치가 아니라) 입출력하기



// 읽을때는 on('data') 출력할때는 write() >> 이 두가자만 기억하면 입출력데이터 끝 !!!! 


// 노드를 배우는 궁극적인 이유 / 네트워크 통신 또한 결국 입출력

