    const fs = require('node:fs');
    const os = require('node:os');

    function logger(options){
        let logfile;
        if(options && options.target === 'file'){
          logfile = fs.createWriteStream(options.filename || 'logger.log', { flags: 'a' });
        }
        return function(req, res, next){
            if(logfile){
                logfile.write(`[${Date()}] ${res.statusCode} ${req.url}${os.EOL}`, next);
            }else{
                console.log(`[${Date()}] ${res.statusCode} ${req.url}`);
                next();
            }
        }
    }
    module.exports = logger;