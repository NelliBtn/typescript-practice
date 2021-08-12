"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName;
productName = 'tote bag';
var product = products_1["default"].filter(function (product) { return product.name === productName; });
console.log(product);
