import products from './products';

let productName: string;
productName = 'tote bag';

const product = products.filter(product => product.name === productName);

console.log(product)