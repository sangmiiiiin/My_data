    const fs = require('node:fs');
    const os = require('node:os');

    function logger(options){
        let logfile;
        if(options && options.target === 'file'){
          logfile = fs.createWriteStream(options.filename || 'logger.log', { flags: 'a' });
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