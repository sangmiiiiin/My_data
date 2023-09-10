const url = require('node:url');

function chat(req, res, next){
  const nickname = req.session.username;
  res.render('chat', { nickname });
}

function login(req, res, next){
  let username = url.parse(req.url, true).query.username;   // username은 url.parse(req.url) > 주소창에서 클라이언트가 요청한 url에서 
  if(username && username.trim() != ''){
    // 로그인 성공
    req.session.username = username;
    res.writeHead(303, {Location: '/chat'});
  }else{
    // 로그인 실패
    res.writeHead(303, {Location: '/'});
  }
  res.end();
}

function logout(req, res){
  req.session.destroy();
  res.writeHead(303, {Location: '/'});
  res.end()
}

// 동적인 자원을 서비스하는 미들웨어
function router(req, res, next){
  const pathname = url.parse(req.url).pathname

  switch(pathname){
    case '/chat':
      chat(req, res, next);
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

module.exports = router