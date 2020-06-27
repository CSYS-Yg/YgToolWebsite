// 引入 express

const express = require('express');

// 创建一个 express 类
const app = express();

//引入数据库
const mysql = require('mysql');
const e = require('express');

//实现本地链接
const db = mysql.createConnection({
    host: 'localhost', // 地址
    user: 'root',      // 数据库名 
    password: 'yuguang', // 密码
    database: 'nodemysql' //数据库名字
})

db.connect((err) => {
    if (err) throw err;
    console.log('数据库连接成功')
})

// 创建数据库测试
app.get('/create', (req, res) => {
    let sql = "CREATE DATABASE nodemysql"
    db.query(sql, (err, result) => {  // 两个参数，第一个参数固定接收错误
        if (err) {
            console.log(err)
        } else {
            console.log(result);
            res.send('DateBase create success ...')
        }
    })
})

// 开启一个服务器
app.listen(3000, () => {
    console.log("127.0.0.1:3000")
})


