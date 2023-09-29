const Product = require("../models/product");
exports.getAddproducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
  });
};
exports.saveGetProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "shop",
      path: "/",
    });
  });
};
