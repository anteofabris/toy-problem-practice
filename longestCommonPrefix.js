// This question is asked by Microsoft. Given an array of strings, return the longest common prefix that is shared amongst all strings.
// Note: you may assume all strings only contain lowercase alphabetical characters.

var test1 = ["colorado", "color", "cold"]// return "col"
var test2 = ["a", "b", "c"]// return ""
var test3 = ["spot", "spotty", "spotted"]// return "spot"

var longestCommonPrefix = function (array) {
    var lcp = '';
    // iterate over first string in array
    for (var i = 0; i < array[0].length; i ++) {
      // if every string in array contains current character
      for (var j = 1; j < array.length; j ++) {
        // lcp += current character
        if (array[j][i] !== array[0][i]) {
            return lcp;
        }
       if (j === array.length - 1) {
           lcp += array[0][i]
       }
      }
    }
    // return lcp
    return lcp;
}

// i - an array of strings
// o - a string
// c - linear time?
// e - empty array, return ''
console.log(longestCommonPrefix(test2))


// better time complexity?

// var longestCommonPrefix = function (array) {



// }