const path = require("path");
const express = require("express");
const rootPath = require("../util/path");
const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
