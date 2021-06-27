/*
This question is asked by Amazon. Given two arrays of numbers, where the first array is a subset of the second array, return an array containing all the next greater elements for each element in the first array, in the second array. If there is no greater element for any element, output -1 for that number.

Ex: Given the following arrays…

nums1 = [4,1,2], nums2 = [1,3,4,2], return [-1, 3, -1] because no element in nums2 is greater than 4, 3 is the first number in nums2 greater than 1, and no element in nums2 is greater than 2.
nums1 = [2,4], nums2 = [1,2,3,4], return [3, -1] because 3 is the first greater element that occurs in nums2 after 2 and no element is greater than 4.
*/

 var nextGreaterElement = function(nums1, nums2) {
  var result = new Array(nums1.length).fill(-1)
  for (var i = 0; i < nums1.length; i ++) {
      for (var j = nums2.indexOf(nums1[i]) + 1; j< nums2.length; j ++) {
          if (nums2[j] > nums1[i]) {
          result[i] = nums2[j];
              break;
          }
      }
  }

  return result;

};

// create result array consisting of all -1 values, with the length of nums1
// loop over nums1
// loop over nums2 starting at the index of current num in nums1 + 1
  // if current nums2 is greater than current nums1
     // add that value to result array at the index position

// return result