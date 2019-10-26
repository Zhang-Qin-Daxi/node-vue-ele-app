    // 搭建本地服务器

//  1. 引入express
const express = require("express");
//  2. 实例化一个app
const app = express();
//  3. 设置端口号
const port = process.env.PORT || 5000;
//  4. app.listen监听
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
//  5. 设置路由
app.get("/",(req,res) => {
    res.send("Hello World!");
})
// 更新需node server.js 重启
// 全局安装 nodemon 不用每次重启
// npm install nodemon -g

