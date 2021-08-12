import products from './products';

let productName: string;
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAdress: string;

productName = 'hoodie';
shippingAdress = '432 Park Ave New York'

const product = products.filter(product => product.name === productName);

const preOrder = product[0].preOrder === 'true' ? true : false;

if (preOrder) {
  console.log('We will send you a message when the product is on its way');
};

Number(product[0].price) >= 25 ? shipping = 0 : shipping = 5;
console.log(shipping);