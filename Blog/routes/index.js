var express = require('express');
var router = express.Router();

const {users,chapterList}=require('./data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(express.static(__dirname));
      
router.get('/hello',function(req,res){
    res.send('hello world');
});

router.get('/login',function(req,res){
    res.type('text/html');
    res.status(200);
    res.sendfile(__dirname+'/login.html');
});
router.get('/list',function(req,res){
    var rq=req.query;
    console.log(rq);
    if (rq.username==users[0].username && rq.pwd==users[0].password) {
        res.type('text/html');
        res.status(200);
        res.sendfile(__dirname+"/list.html");
    }else {
        res.send("登陆失败，用户名或者密码错误");
    }
})
router.get('/result',function(req,res){
    res.send(chapterList);
})
module.exports = router;
