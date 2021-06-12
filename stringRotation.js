/* Assume you have a method 'isSubstring' which checks
if one word is a substring of another. Given two strings,
s1 and s2, write code to check if s2 is a rotation of s1
using only one call to isSubstring (.eg 'waterbottle' is
a rotation of 'erbottlewat')
*/


var isSubstring = (str1, str2) => {
  return str2.includes(str1)
  }


// i - two strings
// o - bool
// c - only call isSubstring once; O(n)
// e - if one string or both are empty

