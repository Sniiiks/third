/* const { log } = require('console');
const {id1, id2} =  require('./id')
console.log('ID nano:' + id1);
console.log('ID random:' + id2);
 */
/* const fs = require('fs');

fs.writeFileSync('text.txt', 'Created by nodejs and fs ', 'utf-8');
console.log(fs.readFileSync('text.txt', 'utf-8')); */

const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

module.exports = sum;