const express = require("express");
// const users = require("./user");
let Mock = require("mockjs");
const app = express();
// let bodyParse = require('body-parser');
// let cookieParser = require('cookie-parser');

// app.use(cookieParser());
// app.use(bodyParse.urlencoded({
//   extended: false
// }));

// 解决跨域问题

// app.all('*', function (req, res, next) {
//   // 设置请求头为允许跨域
//   res.header('Access-Control-Allow-Origin', '*');
//   // 设置服务器支持的所有头信息字段
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild, sessionToken');
//   // 设置服务器支持的所有跨域请求的方法
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   if (req.method.toLowerCase() === 'options') {
//     res.send(200); // 让options尝试请求快速结束
//   } else {
//     next();
//   }
// });
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



app.get("/test", (req, res) => {
  res.json(
    Mock.mock({
      status: 200,
      "data|1-9": [{
        "name|5-8": /[a-z]/,
        "id|+1": 1,
        "value|0-500": 10,
        "code1|10": /[a-z]/,
        "code2|10-100": 100,
      }, ],
    })
  );
});


app.post("/test", (req, res) => {
  res.json({
    code: '200',
    msg: '成功',
    data: []
  });
});

const port = 3300;

app.listen(port, () => {
  console.log(`Sever running in ${port}`);
});