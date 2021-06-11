/*
This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

Ex: Given the following jewels and stones...

jewels = "abc", stones = "ac", return 2
jewels = "Af", stones = "AaaddfFf", return 3
jewels = "AYOPD", stones = "ayopd", return 0

*/

var jewelsAndStones = (stones, jewels) => {
  // create a reference object
  //debugger;
  var counter = 0
  var ref = {}
  // iterate over jewels and add a key/val to ref object if it doens' ready exist
  for (var i = 0; i < jewels.length; i ++) {
    if (!ref[jewels[i]]) {
      ref[jewels[i]] = 1
    } else {
        ref[jewels[i]] += 1

    }
  }

  // iterate over stones
  for (var i = 0; i < stones.length; i ++) {
    // if current stone exists in ref object
    if (ref[stones[i]]) {
      // increment counter
      counter += ref[stones[i]]
    }
  }
  // return counter
  return counter;

}

  // iterate over jewels and add a key/val to ref object if it doens' ready exist
  // iterate over stones
    // if current stone exists in ref object
      // increment counter

  // return counter



// jewels1 = "abc";
//  stones1 = "ac" // return 2
// jewels2 = "Af";
//  stones2 = "AaaddfFf" // return 3
// jewels3 = "AYOPD";
//  stones3 = "ayopd" // return 0

// console.log(jewelsAndStones(jewels3, stones3))
// i - two strings
// o - number
// c
// e


// O(n2):

// iterate over stones
// if current stone is contained in jewels
  // increment count

// return count