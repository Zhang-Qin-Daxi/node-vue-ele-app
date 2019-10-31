    // 搭建本地服务器

//  1. 引入express
const express = require("express");
//  引入mongoose
const mongoose = require("mongoose");
//  2. 实例化一个app
const app = express();
// 引入users.js
const users = require("./routes/api/users");
// DB config
const db = require("./config/keys").mongoURI;
// 引入body-parse中间件
const bodyParser = require("body-parser");
// Connect to mongodb
mongoose.connect(db)
        .then(() => console.log("MongoDb Connected"))
        .catch(err => console.log(err));
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

// 使用router
app.use('/api/users',users);

// 使用bodyParser中间件
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());