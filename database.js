const mysql = require('mysql');
exports.base = (sql,data,callback)=>{
  //创建链接
    let connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'88888888',
        database:'bookstore'
    });
    connection.query(sql,data,(err,results,fields)=>{
        if(err){throw err}
        callback(results);
    });
    connection.end();
};
