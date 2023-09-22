const path = require("path");
const express = require("express");
const rootPath = require("../util/path");
const router = express.Router();

const adminData = require("../routes/admin");

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootPath, "views", "shop.html"));
});

module.exports = router;
