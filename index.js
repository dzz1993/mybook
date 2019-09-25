//安装依赖
const express = require('express');
const app=express();
const bodyParser=require('body-parser');
//const template = require('art-template');
const path = require("path");
const router = require('./router.js');//路由文件要放在单独的路由文件中，在监听路由的时候直接监听router就行
//配置express
//启动静态资源服务
app.use(express.static('./public'));

app.engine('art',require('express-art-template'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','art');
//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//启动服务器，监听路由
app.use(router);
//监听端口
app.listen(3000,()=>{
    console.log('running...');
});
