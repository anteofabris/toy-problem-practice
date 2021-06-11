/*
This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

Ex: Given the following jewels and stones...

jewels = "abc", stones = "ac", return 2
jewels = "Af", stones = "AaaddfFf", return 3
jewels = "AYOPD", stones = "ayopd", return 0

*/

var jewelsAndStones = (stones, jewels) => {
  // create a reference object
  var counter = 0
  var ref = {}
  // iterate over jewels and add a key/val to ref object if it doens' ready exist
  for (var i = 0; i < jewels.length; i ++) {
    if (!ref[jewels[i]]) {
      ref[jewels[i]] = true
    }
  }

  // iterate over stones
  for (var i = 0; i < stones.length; i ++) {
    // if current stone exists in ref object
    if (ref[stones[i]]) {
      // increment counter
      counter ++
    }
  }
  // return counter
  return counter;

}

// i - two strings
// o - number
// c
// e


// O(n2):

// iterate over stones
// if current stone is contained in jewels
  // increment count

// return count