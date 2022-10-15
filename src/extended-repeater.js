const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1,
                        separator = "+",
                        addition = "",
                        additionRepeatTimes = 1,
                        additionSeparator = "|"}){
let miniStr = [];
let maxiStr = [];

str = "" + str;
addition = "" + addition;


for (let i = 0; i < additionRepeatTimes; i++){
  miniStr.push(addition);
}
miniStr = miniStr.join(additionSeparator);

for (let i = 0; i < repeatTimes; i++){
  maxiStr.push(str+miniStr);
}
maxiStr = maxiStr.join(separator);
return maxiStr;  
}

module.exports = {
  repeater
};
