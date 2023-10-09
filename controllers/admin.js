const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.rendder('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    })
}

exports.getAddProduct = (req. res, next) => {
    Product.fetchAll(products => {
        res.rendder('admin/products', {
            prods: products,
            pageTitle: 'Admin Products'
        });
    });
};