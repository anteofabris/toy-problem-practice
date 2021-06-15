/*
This question is asked by Google. Given two integer arrays, return their intersection.
Note: the intersection is the set of elements that are common to both arrays.

Ex: Given the following arrays...

nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
*/

var intersectionOfNumbers = (array1, array2) => {

  var result = [];
  var ref = {}

  array1.forEach((num) => {
    ref[num] = true;
  })

  array2.forEach((num) => {
    if (ref[num]) {
      ref[num] = true
      result.push(num)
      delete ref[num]
    }
  })

  return result;

}

// nums1 = [2,4,6,8]
// nums2 = [1,3,5,7]
// console.log(intersectionOfNumbers(nums1, nums2))

// create result array
// create reference object
// for each num in array1
  // add num to ref object
// for each num in array2
  // if num exists in ref object
    // push num to result
    // delete num from ref object