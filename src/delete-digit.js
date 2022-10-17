const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  if (number == null) {
    return 0;
  }
  let tempResult = [];
  let numberAsArray = number.toString().split(''); 
  for (var i = 0; i < numberAsArray.length; i++) {
    let arrayCopy = numberAsArray.slice(0)
    arrayCopy.splice(i, 1) 
    let newNumber = parseInt(arrayCopy.join('')) 
    tempResult.push(newNumber)
  }
  return Math.max(...tempResult)

}

module.exports = {
  deleteDigit
};
