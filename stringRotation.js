/* Assume you have a method 'isSubstring' which checks
if one word is a substring of another. Given two strings,
s1 and s2, write code to check if s2 is a rotation of s1
using only one call to isSubstring (.eg 'waterbottle' is
a rotation of 'erbottlewat')
*/

// str1 and str2

// i - two strings
// o - bool
// c - only call isSubstring once; O(n)
// e - if one string or both are empty

// check if they are the same length

// duplicate str 2 i.e. 'cat' -> 'catcat'
// checj if str1 is now a substring of str2


// bananas & ananas


var stringRotation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

  if (isSubstring(str1, str2+str2)) {
    return true;
  }

  return false
}


var isSubstring = (str1, str2) => {
  return str2.includes(str1)
  }

console.log(stringRotation('cat', 'atc'))