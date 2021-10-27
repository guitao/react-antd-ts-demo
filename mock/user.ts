const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const User = require("../../modeis/User");

router.get("/test", (req, res) => {
  res.json({
    mes: "login works",
  });
});


module.exports = router;
