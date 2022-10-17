const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  if (str == null || str.length == 0) {
    return result;
  }

  str = str.split('');
  let count  = 0;
  for (var i = 0; i < str.length; i++) {
    let char_current = str[i];
    let char_next = str[i + 1];
    if (char_current != char_next && count == 0) {
      result += char_current; 
    } else if (char_current != char_next && count > 0) {
      count += 1;
      result += count.toString() + char_current;
      count = 0;
    } else {
      count += 1;
    };
  }
  return result;
}

module.exports = {
  encodeLine
};
