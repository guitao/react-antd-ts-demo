const express = require("express");
// const users = require("./user");
let Mock = require("mockjs");

const app = express();

app.get("/test", (req, res) => {
  res.json(
    Mock.mock({
      status: 200,
      "data|1-9": [
        {
          "name|5-8": /[a-z]/,
          "id|+1": 1,
          "value|0-500": 10,
          "code1|10": /[a-z]/,
          "code2|10-100": 100,

        },
      ],
    })
  );
});

const port = 3300;

app.listen(port, () => {
  console.log(`Sever running in ${port}`);
});
