import products from './products';

let productName: string;
productName = 'tote bag';

const product = products.filter(product => product.name === productName); // [ {} ]

const preOrder = product[0].preOrder === 'true' ? true : false; // convert string to boolean

if (preOrder) {
  console.log('We will send you a message when the product is on its way');
}

console.log(product[0])