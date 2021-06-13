/*
This question is asked by Microsoft. Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

Ex: Given the following strings...

"abcabd", return 2
"thedailybyte", return 1
"developer", return 0
*/

// i - string
// o - index as a number
// c = not brute force
// e - if a unique char doesn't exist, return - 1

var firstUniqueChar = (string) => {
  var result = 0

  var count = (string) => {
    var repeats = 0
    var current = string[0]
    var newstring = ''
    for (var i = 1; i < string.length; i ++) {
      if (string[i] === current) {
        if (repeats === 0) {
          newString = string.slice(1, i - 1) + string.slice(i + 1, string.length)
        } else {
          newString = string.slice(0, i) + string.slice(i + 1, string.length)
        }
      }
    }
  }

}


// iterate over string
  // store each char's count in a ref obj

//  find the ones with only 1
  // put those in an array and find the lowest indexOf


// keep iterating but splice out the ones you already counted

// split string into an array and sort
// find where the chars start repeating and slice array until there. now you have all unique ones
// iterate over the unique ones and find the lowest indexOf

//////

// iterate over string from 0
  // if you arrive at the end and there's no duplicate, return index (need to tracj)

  ////////

  // create index var set to 0

  // crete inner function count(string)
    // create toSplice array
    // create index0 var set to val at index0
    // create repeated var set to 0
    // iterate over string from 0
      // if val at current index equals index0
        // if repeated is 0
          // splice 0 and splice current index
          // repeated ++
          // i -= 2
        // if repeated is > 0
          // splice current index
          // i --

    // if repeated is 0
      // return
    // else, increment splice fisrt index off and call count on rest of string