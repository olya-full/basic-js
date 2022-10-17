const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(stringToTest) {
  let result = false;
  if (stringToTest == null) {
    return result;
  }
  let mac = stringToTest.split('-')
  if (mac.length != 6) {
    return result;
  }
  const allowedChars = ["A", "B", "C", "D", "E", "F"];
  const allowedInts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


  for (var i = 0; i < mac.length; i++) {
    let firstVal = mac[i][0]; 
    let secondVal = mac[i][1];

    let firstPassed = allowedChars.includes(firstVal) || allowedInts.includes(firstVal);
    let secondPassed = allowedChars.includes(secondVal) || allowedInts.includes(secondVal);
    if (firstPassed && secondPassed) {
      result = true;
    } else {
      result = false;
      break; 
    }
  }
  return result;
  
}
module.exports = {
  isMAC48Address
};
