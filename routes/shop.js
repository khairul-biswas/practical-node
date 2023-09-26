const path = require("path");
const express = require("express");
const rootPath = require("../util/path");
const router = express.Router();

const adminData = require("../routes/admin");

router.get("/", (req, res, next) => {
  const products = adminData.products ? adminData.products : [];
  res.render("shop", { prods: products, pageTitle: "shop", path: "/" });
});

module.exports = router;
