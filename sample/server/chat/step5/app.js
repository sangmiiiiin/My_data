const connect = require('connect');
const fs = require('node:fs');
const path = require('node:path');
const static = require('./middleware/static');
const logger = require('./middleware/logger');
const indexRouter = require('./routes/index');

const app = connect();          // connect 가 함수를 exports 하고 있음을 의미

app.use(logger({ target : 'file', filename: 'mylog.log' }));
app.use(static(path.join(__dirname, 'public')));

app.use(indexRouter);

// 404 에러 처리용 미들웨어
app.use(function(req, res, next){
    let error = new Error(req.url + ' 파일을 찾을 수 없습니다.');
    error.status = 404;
    next(error);
});

// 에러 처리 전용 미들웨어
app.use(function(err, req, res, next){
    err.status = err.status || 500;
    const filename = path.join(__dirname, 'views', 'error.html');

    fs.readFile(filename, function(error, data){
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8'});
        data = data.toString().replace('<%=message%>', err.message)
                              .replace('<%=error.status%>', err.status)
                              .replace('<%=error.stack%>', err.stack);
        res.end(data);
    });
});

module.exports = app;