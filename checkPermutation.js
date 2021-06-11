/* Given two strings, write a method to decide if one is a permutation of the other */


var checkPermutation = (string1, string2) => {

  if (string1.length !== string2.length) {
    return false
  }

  var ref1 = {}
  var ref2 = {}
  for (var i = 0; i < string1.length; i++) {
    if (!ref1[string1[i]]) {
      ref1[string1[i]] = 1
    } else {
      ref1[string1[i]] += 1
    }
  }

  for (var i = 0; i < string2.length; i++) {
    if (!ref2[string2[i]]) {
      ref2[string2[i]] = 1
    } else {
      ref2[string2[i]] += 1
    }
  }

  for (var key in ref1) {
    if (!ref2[key]) {
      return false
    }
    if (ref2[key] !== ref1[key]) {
      return false
    }
  }

}

// iterate over first string
// count each char and store in ref object

// iterate over second string
// count each char and store in ref2 object

// for every key in ref 2
  // if key not in ref 1
    // return false
  // if value at key doesn't match value at ref1 key
    // return false

// if length of Object.keys are not the same
  // return false

// return true