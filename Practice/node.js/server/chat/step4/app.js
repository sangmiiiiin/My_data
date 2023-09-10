/**
 * 웹 어플리케이션 개발시 일반적으로 처리해야 할 작업
 * 1. 로깅(logger.js)
 * 2. url 텍스트 인코딩
 * 3. POST 방식의 요청 바디 파싱
 * 4. JSON 방식의 데이터 파싱
 * 5. 쿠키 파싱
 * 6. 정적인 자원 응답(static.js)
 * 7. 세션 관리
 * 8. 동적인 자원 응답
 * 9. 파일 업로드
 * 10. 보안(인증, 권한)
 * 11. 에러 처리
 * ......
 */

const connect = require('connect');
const path = require('path');
const static = require('./middleware/static');
const logger = require('./middleware/logger');

const app = connect();

app.use(logger({ target: 'file', filename: 'mylog.log'}));
app.use(static(path.join(__dirname, 'public')));

// 404 에러 처리용 미들웨어
app.use(function(req, res, next){
    res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
    res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
});

module.exports = app;