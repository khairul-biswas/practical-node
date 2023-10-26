const Product = require('../models/product');
const Cart = require('.../models/product')


exports.getProducts = (req, res, next) => {
  Product.fetchAll( products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (ewq, res, next) => {
  const proId = req.params.productId;
  Product.findById(proId, Product => {
    res.render('shop/prodict-details', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });

  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll( products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
}
exports.postCart = (req, res, next) => {
  const proId = req.body.productId;
  Product.findById(proId, product => {
    Cart.addproduct(proId, Product.price);
  })
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
}
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  })
}



