const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let dnsName = '';
  domains.forEach(e => {
    let word = e.split('.');
    for (let i = word.length-1; i>=0 ;i--) {
      dnsName += `.${word[i]}`;
      if (!obj[dnsName]) {
         obj[dnsName] = 1;
      } else obj[dnsName] += 1;
    }
    dnsName = '';
  })
  return obj
}

module.exports = {
  getDNSStats
};
