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

// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false

// var test1 = 'abcba';
// var test2 = 'foobof';
// var test3 = 'abccab';

// console.log(validPalindromeRemoval('raicecar'))



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