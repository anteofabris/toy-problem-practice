/* This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
Note: a palindrome is a sequence of characters that reads the same forwards and backwards.


"abcba", return true
"foobof", return true (remove the first 'o', the second 'o', or 'b')
"abccab", return false
*/

var validPalindromeRemoval = function (string) {

  for (var i = 0; i < string.length; i ++) {
    var current = string.split('').splice(i, 1).join('')
    if (isPal(current)) {
      return true;
    }
  }
  return false;
}

var isPal = function (string) {
  if (string.length % 2 === 1) {
    string = string.split('').splice((string.length - 1) / 2).join('')
  }
  var first = string.slice(0, (string.length / 2))
  var second = string.slice((string.length / 2), string.length)

  var firstRev = first.split('').reverse().join('')

  if ( firstRev === second) {
    return true
  }
  return false
}

// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false

var test1 = 'abcba';
var test2 = 'foobof';
var test3 = 'abccab';

console.log(validPalindromeRemoval(test1))

// if isPal(inputString)
  // return true

// iterate over input string
  // take current char out and check if it is a palindrome
    // if so, return true

// return false


  // helper function: isPal(string)
    // if odd
      // remove middle char
    // split string in half
    // reverse first half
    // if they match
      // return true

    // return false