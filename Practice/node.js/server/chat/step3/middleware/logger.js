const fs = require('fs');
const os = require('os');

function logger(options){
  let logfile;
  if(options && options.target === 'file'){
    logfile = fs.createWriteStream(options.filename || 'chat.log', {flags: 'a'});
  }
  return function(req, res){
    if(logfile){
      logfile.write(`[${Date()}] ${res.statusCode} ${req.url}${os.EOL}`);
    }else{
      console.log(`[${Date()}] ${res.statusCode} ${req.url}`);
    }
  }
}

module.exports = logger;