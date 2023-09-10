const url = require('node:url');
const fs = require('node:fs');
const path = require('node:path');

const views = path.join(__dirname, '..', 'views');

function chat(req, res){
  // res.writeHead(303, {Location: '/chat.html'});
  // res.end();

  let username = url.parse(req.url, true).query.username;
  let filename = path.join(views, 'chat.html');

  fs.readFile(filename, function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    data = data.toString().replace('<%=nickname%>', username);
    res.end(data);
  });
}

function login(req, res){
  let username = url.parse(req.url, true).query.username;
  if(username && username.trim() != ''){
    // 로그인 성공
    res.writeHead(303, { Location: '/chat' });
  }else{
    // 로그인 실패
    res.writeHead(303, { Location: '/' });
  }
  res.end();
}

function logout(req, res){

}

// 동적인 자원을 서비스 하는 미들웨어
function router(req, res, next){
  const pathname = url.parse(req.url).pathname;

  switch(pathname){
    case '/chat':
      chat(req, res);
      break;
    case '/login':
      login(req, res);
      break;
    case '/logout':
      logout(req, res);
      break;
    default:
      next();
  }
}

module.exports = router;