/* This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
Note: a palindrome is a sequence of characters that reads the same forwards and backwards.


"abcba", return true
"foobof", return true (remove the first 'o', the second 'o', or 'b')
"abccab", return false
*/

var validPalindromeRemoval = function (string) {

  for (var i = 0; i < string.length; i ++) {
    var current = string.slice(0, i) + string.slice(i + 1, string.length)
    if (isPal(current)) {
      return true;
    }
  }
  return false;
}

var isPal = function (string) {
return string === string.split('').reverse().join('')
}