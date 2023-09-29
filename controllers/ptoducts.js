const products = [];

exports.getAddproducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
  });
};
exports.saveGetProducts = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    res.render("shop", { 
        prods: products, 
        pageTitle: "shop", 
        path: "/" 
      });
  };
