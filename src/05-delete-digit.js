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
  const arr = n.toString().match(/.{1,1}/g);
  const less = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '0') {
      arr.splice(arr.indexOf(arr[i]), 1);
      return Number(arr.join(''));
    }
    if (Number(arr[i]) === less) {
      arr.splice(arr.indexOf(arr[i]), 1);
      return Number(arr.join(''));
    }
  }
  return 0;
}

module.exports = deleteDigit;
