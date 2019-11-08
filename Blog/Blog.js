const express=require('express'),
      {users,chapterList}=require('./data.json');
      app=express();
      
app.use(express.static(__dirname));
      
app.get('/',function(req,res){
    res.send('hello world');
});

app.get('/login',function(req,res){
    res.type('text/html');
    res.status(200);
    res.sendfile(`${__dirname}/login.html`);
});
app.get('/list',function(req,res){
    var rq=req.query;
    console.log(rq);
    if (rq.username==users[0].username && rq.pwd==users[0].password) {
        res.type('text/html');
        res.status(200);
        res.sendfile(`${__dirname}/list.html`);
    }else {
        res.send("登陆失败，用户名或者密码错误");
    }
})
app.get('/result',function(req,res){
    res.send(chapterList);
})

app.listen(8080);