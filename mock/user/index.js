const {
  router,
  Mock
} = require('../connect')

router.get("/", (req, res) => {
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

router.post("/query", (req, res) => {
  let params = req.body;
  console.log("=====params=====", params)
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



module.exports = router;