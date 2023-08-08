const fileIn = require('fs').createReadStream('output.txt');
const fileOut = require('fs').createWriteStream('output2.txt');

fileIn.pipe(fileOut);

// 파일로부터 데이터를 읽어서
// fileIn.on('data', function(data){
//   // 파일로 출력한다.
//   fileOut.write(data);
// });
