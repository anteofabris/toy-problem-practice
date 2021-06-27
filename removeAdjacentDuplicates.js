/*
This question is asked by Facebook. Given a string s containing only lowercase letters,
continuously remove adjacent characters that are the same and return the result.

Ex: Given the following strings...

s = "abccba", return ""
s = "foobar", return "fbar"
s = "abccbefggfe", return "a"
*/

// iterate over input string keeping track of previous char and previous char index
// if previous char matches current char,
// slice out prev char and current char
// start at prev char index and keep going


var removeAdjacentDuplicates = (s) => {
  var prev = '';
  var prevIndex = -1

  for (var i = 0; i < s.length; i++) {
    if (s[i] === prev) {
      s = s.slice(0, prevIndex) + s.slice(i, s.length)
    }
    prev = s[i]
    prevIndex++
  }

  return s
}