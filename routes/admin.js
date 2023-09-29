const path = require("path");
const express = require("express");
const productsController = require("../controllers/ptoducts");
const router = express.Router();

router.get("/add-product", productsController.getAddproducts);

router.post("/add-product", productsController.saveGetProducts);

module.exports = router;
