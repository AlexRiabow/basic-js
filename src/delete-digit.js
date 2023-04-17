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
function deleteDigit(n) {
  let g = n + '';
  g = g.split('').sort((a,b) => b-a);
  n = String(n).split('');
  if (n[n.indexOf(g[0])-1]) n.splice(n.indexOf(g[0])-1,1)
  else n.splice(n.indexOf(g[0])+1,1)
  return Number(n.join(''))
}

module.exports = {
  deleteDigit
};
