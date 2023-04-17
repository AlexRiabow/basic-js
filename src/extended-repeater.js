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
function repeater(str, options) {
  let separator = '+'
  if (options.separator) {separator = options.separator}

  let add = '';
  if (options.addition) {add = options.addition}

  let addSeparator = '';
  if (options.additionSeparator) {
    addSeparator = options.additionSeparator
  }

  let addRep = 1
  if (options.additionRepeatTimes) {addRep = options.additionRepeatTimes}

  let addition = (add + addSeparator)

  let fragment = (str + (addition.repeat(addRep)).slice(0,-(addSeparator.length))  + separator);

  let string = fragment.repeat(options.repeatTimes).slice(0,-(separator.length))

  return string
}

module.exports = {
  repeater
};
