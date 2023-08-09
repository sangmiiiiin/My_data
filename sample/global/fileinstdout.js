const file = require('fs').createReadStream('output.txt');
// 파일로부터 데이터를 읽어서
 file.on('data', function(data){
  data = data.toString();
  // 표준 출력장치로 출력한다.
  process.stdout.write(data);
});

