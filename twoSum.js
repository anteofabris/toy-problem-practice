/* This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
Note: you may not sum a number with itself.

Ex: Given the following...

[1, 3, 8, 2], k = 10, return true (8 + 2)
[3, 9, 13, 7], k = 8, return false
[4, 2, 6, 5, 2], k = 4, return true (2 + 2)
*/

var twoSum = (array, target) => {

for (var i = 0; i < array.length; i ++) {
  for (var j = 0; j < array.length; j ++) {
    if (array[j] + array[i] === target && j !== i) {
      return true;
    }
  }
}

return false;

}

 var test1 = [1, 3, 8, 2];
 var test2 = [3, 9, 13, 7];
 var test3 = [4, 2, 6, 5, 2];

 console.log(twoSum(test1))

// i - array of integers, target
// o - boolean
// c - hopefully not O(n2)
// e - array contains less than 2 integers


// brute force:

// for each item i in the input array
  // iterate over the array, skipping that item
    // if sum of item and second iterated item evaluates to target value
      // return true

// return false



// recursive:

// bc:


