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
  let s = str.split('');
  let res = '';
  let count = 0;
  let y = 1;
  for (let i=0;i<s.length;i++){
    count = i*y
    y = 1;
    if (s[i]!==s[i+1]) {
      if (count===0) {
        res += s[i];
      }
      else {
        if (res === '') res += `${count+1}${s[i]}`;
        else res += `${count}${s[i]}`;
      }
      s = s.slice(i);
      i = 0;
      y = 0;
    }
  }
  return res
}

module.exports = {
  encodeLine
};
