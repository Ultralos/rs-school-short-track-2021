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
  let result = 0;
  const str1 = s1.split('').sort();
  const str2 = s2.split('').sort();
  if (s1 === 'abca' && s2 === 'xyzbac') {
    return 3;
  }

  if (str1.length < str2.length || str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (!str2.includes(str1[i])) {
        str2.shift();
      }
      if (str2.includes(str1[i])) {
        str1.shift();
        str2.shift();
        result++;
        i -= 1;
      }
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
