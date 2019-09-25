/*
* 路由模块
* */
let express = require('express');
let router = express.Router();
let service = require('./service.js');
//路由，业务逻辑放在service中

//渲染主页面(渲染页面的功能)
router.get('/',service.showIndex);
//跳转到addBook页面
router.get('/toAddBook',service.toAddBook);
//添加一条数据
router.post('/addBook',service.addBook);
//根据id跳转到相应页面
router.get('/toEditBook',service.toEditBook);
//监听提交
router.post('/editBook',service.editBook);

//监听删除图书
router.get('/delBook',service.delBook);
//登录页面
router.post('/login',service.login);
//暴露模块router'
module.exports = router;
