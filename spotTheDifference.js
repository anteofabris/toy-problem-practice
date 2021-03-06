/*
This question is asked by Google. You are given two strings, s and t which only consist of lowercase letters.
t is generated by shuffling the letters in s as well as potentially adding an additional random character.
Return the letter that was randomly added to t if it exists, otherwise, return ’ ‘.
Note: You may assume that at most one additional character can be added to t.

Ex: Given the following strings...

s = "foobar", t = "barfoot", return 't'
s = "ide", t = "idea", return 'a'
s = "coding", t "ingcod", return ''
*/

var spotTheDifference = (s, t) => {
  var ref = {}
  var result = ''
  t.forEach((letter) => {
    if (ref[letter]) {
      ref[letter] ++
    } else {
      ref[letter] = 1
    }
  })

  s.forEach((letter) => {
    if (ref[letter]) {
      if (ref[letter] === 0) {
        delete ref[letter]
      } else {
        ref[letter] --
      }
    }
  })

  for (var key in ref) {
    if (key) {
      result = ref[key]
    }
  }

return result;

}

// i - two strings
// o - one-letter string or ''
// c - not brute force
// e - empty strings or dissimilar strings
//

// iterate over t, store each letter in a key and count occurence in value
// iterate over s, subtract/delete value/key of each letter

// if only one letter remains
  // return that letter
// if no lette rremains
  // return ''