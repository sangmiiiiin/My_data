const express=require('express')
const app=express()
const port=3000

// 서버준비
app.listen(port, function(){
    console.log(`Server Start =====> ${port}`)
})

// ROOT
app.get('/', function(req, res){
    res.sendFile(__dirname + "/pages/index.html")
})

// DB 설정
const mysql=require('mysql2')
const conn={
    host:'127.0.0.1',
    port:"3306",
    user:'root',
    password:'1234',
    database:'example'
}

app.get("/dbtesting", function(req,res){
    let connection=mysql.createConnection(conn);

    // 접속
    connection.connect();

    // 쿼리 작성
    let sqlQuery="SELECT * FROM member";
    connection.query(sqlQuery, function(err, results){
        if(err){
            console.log(err.message);
        }
        console.log("Select Success");
        console.log(results);
    });

    // 접속 끄기
    connection.end();
});

// 회원가입
app.get('/member/register', function(req,res){
    res.sendFile(__dirname + "/pages/register.html")
});

// 환경설정
app.use(express.urlencoded({extended: true}));

app.post("/member/registerOk", function(req,res){
    const id=req.body.id;
    const pwd=req.body.pwd;
    const name=req.body.name;
    const age=req.body.age;
    console.log(id + "," + pwd + "," + name + "," + age);


    let connection=mysql.createConnection(conn);
    connection.connect();

    let sqlQuery="INSERT INTO member VALUES(?,?,?,?)";
    let data=[id, pwd, name, age];

    connection.query(sqlQuery, data, function(err, results){
        if(err){
            console.log(err);
        }
        console.log("Insert Success");
        console.log(results)
    });

    connection.end();

    res.send(`
        <script>
        alert("회원가입 성공");
        location.href="http://localhost:3000/";
        </script>
    `)
});