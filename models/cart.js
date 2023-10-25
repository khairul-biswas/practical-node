const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice){
        //Fetch the previus cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { peoducts: [], totalPrice: 0 };
            if( !err ) {
                cart = JSON.parse(fileContent);
            }
            // analyze the cart => find existing product

            const existingProductIndex = cart.products.findindex(
                prod => prod.id === id
            );

            const existingProduct = cart.products[existingProductIndex]
            let updatedProduct;
        })
    }
}