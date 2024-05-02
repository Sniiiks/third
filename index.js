/* const results = require('s') 
const id1 = nanoid.nanoid()
const id2 = nanoid.nanoid()
module.exports = {id1 , id2 } */

const sum = require('./sum');
const multiply = require('./multiply');
const minus = require('./minus');
const divide = require('./divide');
const maxc = require('./max');
const minc = require('./min');

const arr = [1, 2, 3, 4, 5];

console.log("Sum:", sum(arr));
console.log("Multiply:", multiply(arr));
console.log("Minus:", minus(arr));
console.log("Divide:", divide(arr));
console.log("Max number:", maxc(arr));
console.log("Min number:", minc(arr));