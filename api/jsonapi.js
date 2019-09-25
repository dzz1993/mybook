//let path= require('path');
let express = require('express');
let app = express();
let datebase = require('../database.js');

app.get('/getUser',(req,res)=>{
    let sql = "select * from user";
    let data=[];
    datebase.base(sql,data,(result) =>{
        res.json(result);
    });
});

app.listen(3300,()=>{
    console.log("running 3300");//把这个启动在3300端口，互不影响
});
