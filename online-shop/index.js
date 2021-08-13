"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName;
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAdress;
productName = 'hoodie';
shippingAdress = '432 Park Ave New York';
// find product by name
var product = products_1["default"].filter(function (product) { return product.name === productName; });
// convert preOrder string to boolean
var preOrderBool = product[0].preOrder === 'true' ? true : false;
// if preOrder is available send a msg to customer
if (preOrderBool) {
    console.log('We will send you a message when the product is on its way');
}
;
var productPrice = Number(product[0].price);
// if product price over 25 shipping is free
Number(productPrice) >= 25 ? shipping = 0 : shipping = 5;
// if shipping to NY tax percent is 10%, otherwise 5%
shippingAdress.match('New York') ? taxPercent = 0.1 : taxPercent = 0.05;
// calculate total
taxTotal = productPrice * taxPercent;
total = taxTotal + productPrice + shipping;
// receipt
console.log("You ordered " + productName + " to be shipped to " + shippingAdress + ". \nPrice: " + productPrice + ", \nTax: " + taxTotal + ", \nShipping: " + shipping + ", \nTotal: " + total);
