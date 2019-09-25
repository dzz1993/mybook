/*
* 单独存放业务模块
* */
//逻辑函数，获取编号的最大值
let fs = require("fs");
let path = require('path');
let database = require('./database.js');

function getMaxId() {
    let arr=[];
    data.list.forEach((item)=>{
        arr.push(item.id);
    });
    return Math.max.apply(null,arr);
}
function getItem(id) {
    let res=null;
    data.list.forEach((item)=>{
        if(item.id === id){
            res=item;
        }
    });
    return res;
}
//写入数据
function writeFile(res) {
    //写入数据
    fs.writeFile('data.json',JSON.stringify(data,null,4),err=>{
        if(err){
            res.send('server error')
        }else{
            res.redirect('/');
        }
    })
}
//加载数据
const data = require('./data.json');
exports.showIndex = (req,res)=>{
    res.render('index',data);
};
exports.toAddBook = (req,res)=>{
    res.render('addBook',{});
};
exports.addBook =(req,res)=>{
     let list = req.body;
     list.id = getMaxId()+1;
     data.list.push(list);//仅仅是做了显示处理，并没有写入
     writeFile(res);
};
exports.toEditBook = (req,res)=>{
  let id=req.query.id;
  let item = getItem(id);
  let data ={
      id:id,
      name:item.name,
      author:item.author,
      category:item.category,
      desc:item.desc
  };
  res.render('editBook',data);
};
exports.editBook = (req,res)=>{
    let id=req.body.id;
    data.list.forEach((item)=>{
        if(item.id === id){
            //item = req.body;//不能直接对象相等
            for(let key in req.body){
                item[key] = req.body[key];
            }
        }
    });
    writeFile(res);
};
exports.delBook = (req,res)=>{
  let id= req.query.id;
  data.list.forEach((item,key)=>{
      if(item.id == id){
          data.list.splice(key,1);
      }
  });
    //写入数据
    writeFile(res);
    let sql = 'delete from book where id=?';
    let data_id = [id];
    database.base(sql,data_id,(results)=>{
        console.log(results);
    })
};
exports.login =(req,res)=>{
  let data = req.body;
  let sql='select * from user where name=? and password=?';
  let sql_data = [data.name,data.password];
  database.base(sql,sql_data,(result)=>{
      if(result.length === 1){
          res.redirect('/');
      }else{
          res.send('用户名或者密码错误');
      }
  })
};
