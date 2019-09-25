const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'../','data.json'),'utf8',((err, data) => {
    if(err) return;
    let arr=JSON.parse(data).list;
    let sql=[];
    arr.forEach(item=>{
        sql.push(`insert into book (name,author,category,description) values ('${item.name}','${item.author}','${item.category}','${item.desc}')`);
    });
    fs.writeFile(path.join(__dirname,'book.sql'),sql.join(';'),'utf8',()=>{
            console.log('init finished');
    })
}));
