const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (Array.isArray(arr)==false) return false; 
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] != "string"||arr[i]==="") {
      continue;
    } else {
      arr[i]=arr[i].trimStart();
      result.push(arr[i][0].toUpperCase());
    }
  }
  final = result.sort().join("");  
  return final;
}

module.exports = {
  createDreamTeam
};
