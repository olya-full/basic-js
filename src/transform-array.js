const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)===false) throw new Error("\'arr\' parameter must be an instance of the Array!");
  if (arr.length === 1) return arr;
  if (arr === []) return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
      if (arr[i]==="--discard-next"){
      if (i == arr.length-1) break;
      i=i+2;
      continue;
    } else if (arr[i]==="--discard-prev"){
      if (i == 0) continue;
      newArr.pop(newArr[i-1]);
      continue;
    } else if (arr[i]==="--double-next"){
      if (i == arr.length-1) break;
      newArr.push(arr[i+1]);
      continue;
    } else if (arr[i]==="--double-prev" && i > 0){
      newArr.push(newArr[i-1]);
      continue;
    } else if (arr[i]==="--double-prev" && i == 0){
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
