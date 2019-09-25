const express = require('express');//使用express，引入
const app = express();//生成APP对象
const database = require('../database.js');
app.get('/books',(req,res)=>{
   let sql = 'select * from book';
   database.base(sql,null,(result)=>{
       res.json(result);
   })
});
app.get('/books/book/:id',(req,res)=>{//restful api的传参为:+参数的形式
    let id = req.params.id;//通过req.params.xxx获取参数
    let sql = 'select * from book where id=?';
    let data = [id];
    database.base(sql,data,(result)=>{
        res.json(result[0]);
    })
});

app.listen(3100,()=>{
    console.log("running 3100...")
});
