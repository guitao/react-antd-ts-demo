const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const Mock = require("mockjs");


// 跨域处理
app.use(cors());
// json请求
app.use(express.json())
// 表单请求
app.use(express.urlencoded({
    extended: false
}))

module.exports = {
    router,
    app,
    Mock
}