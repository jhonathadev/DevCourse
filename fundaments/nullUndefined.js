let value; 

console.log(value);

value = null;
console.log(value);

const product = {};
console.log(product.price);
product.price = 4.5;
console.log(product.price);
product.price = undefined;
console.log(!!product.price);
console.log(product);

delete product.price;
console.log(product);
product.price = null;
console.log(!!product.price);
