console.log('범용성이 필요한 확장 모듈에서 많이 사용하는 exports 방식');

const os = require('node:os');
const fs = require('node:fs');

function logger(options){
  let logfile;
  if(options && options.target === 'file'){
    logfile = fs.createWriteStream(options.filename || 'logger.log', { flags: 'a' });
  }
  return {
    log: function(msg){
      if(logfile){
        logfile.write(`<log> ${msg}${os.EOL}`);
      }else{
        console.log(`<log> ${msg}`);
      }
    },
    error: function(msg){
      if(logfile){
        logfile.write(`<error> ${msg}${os.EOL}`);
      }else{
        console.log(`<error> ${msg}`);
      }
    }
  };
}

module.exports = logger;