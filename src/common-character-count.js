const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  while(s1.length>0){ 
    let symbol = s1[0];
    let ss1 = s1.replaceAll(symbol,'');
    let ss2 = s2.replaceAll(symbol,'');
    let sl1 = s1.length-ss1.length;
    let sl2 = s2.length-ss2.length;
    if (sl1 >= 1 && sl2 >= 1) {
      res += Math.max(sl1,sl2) - (Math.max(sl1,sl2) - Math.min(sl1,sl2));
    }
    s1 = ss1;
    s2 = ss2;
  }
  return res
}

module.exports = {
  getCommonCharacterCount
};
