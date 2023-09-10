const connect = require('connect');
const fs = require('node:fs');
const path = require('node:path');
const static = require('serve-static');
const logger = require('morgan');
const session = require('express-session');
const nocache = require('nocache');

const indexRouter = require('./routes/index');

const app = connect();

app.use(logger('dev'));
app.use(static(path.join(__dirname, 'public')));

app.use(session({
  cookie: { maxAge: 1000*60*60*2 },
  secret: 'sometext',
  rolling: true, // 매 응답마다 쿠키 시간 초기화
  resave: false,  // 세션값이 수정되지 않으면 서버에 다시 저장하지 않음
  saveUninitialized: false // 세션에 값이 없으면 쿠키를 전송하지 않음

})); // req.session 속성을 만들어서 객체를 저장

app.use(nocache());

const ejs = require('ejs');
// ejs를 기본 view engine으로 설정
app.use(function(req, res, next){
  const views = path.join(__dirname, 'views');
  res.locals = {};

  res.render = function(filename, data){
    let filepath = path.join(views, filename + '.ejs');
    data = data || res.locals
    console.log(res.locals);
    ejs.renderFile(filepath, data, function(err, result){
      if(err){
        next(err);
      }else{
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.end(result);
      }
    });
  };
  next();
});

app.use(indexRouter);

// 404 에러 생성용 미들웨어
app.use(function(req, res, next){
  let error = new Error(req.url + '파일을 찾을 수 없습니다.');
  error.status = 404;
  next(error);
});

// 에러 처리 전용 미들웨어
app.use(function(err, req, res, next){
  res.locals.message = err.message;
  res.locals.error = err;

  err.status = err.status || 500;
  res.render('error');
});

module.exports = app;

