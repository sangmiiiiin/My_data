const file = require('fs').createWriteStream('output.txt');
// 표준 입력장치로부터 데이터가 입력되면
process.stdin.on('data', function(data){
  data = data.toString();
  // 파일로 출력한다.
  file.write(data);
});




