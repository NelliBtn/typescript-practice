import products from './products';

let productName: string;
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAdress: string;

productName = 'hoodie';
shippingAdress = '432 Park Ave New York'

// find product by name
const product = products.filter(product => product.name === productName);

// convert preOrder string to boolean
const preOrderBool = product[0].preOrder === 'true' ? true : false;

// if preOrder is available send a msg to customer
if (preOrderBool) {
  console.log('We will send you a message when the product is on its way');
};

const productPrice = Number(product[0].price);

// if product price over 25 shipping is free
Number(productPrice) >= 25 ? shipping = 0 : shipping = 5;

// if shipping to NY tax percent is 10%, otherwise 5%
shippingAdress.match('New York') ? taxPercent = 0.1 : taxPercent = 0.05;

// calculate total
taxTotal = productPrice * taxPercent;
total = taxTotal + productPrice + shipping;

// receipt
console.log(`You ordered ${productName} to be shipped to ${shippingAdress}. \nPrice: ${productPrice}, \nTax: ${taxTotal}, \nShipping: ${shipping}, \nTotal: ${total}`)


