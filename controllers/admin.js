const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.rendder('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.bdy.description;
    const product = new Product(title, imagesUrl, description,price);
    product.save();
    res.redirect("/");
}

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.rendder('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: 'admin/products',
        });
    });
};