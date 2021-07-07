/*
Given a binary search tree, return its mode (you may assume the answer is unique). If the tree is empty, return -1. Note: the mode is the most frequently occurring value in the tree.

Ex: Given the following tree...

        2
       / \
      1   2
return 2.

Ex: Given the following tree...

         7
        / \
      4     9
     / \   / \
    1   4 8   9
               \
                9
return 9.
*/


var findTheMode = function (root) => {

}

// create an object to store mode and its occurrence count - set to node
// create countCurrent var set to 0

// iterate over bst
  // if node has a left child
    // if left child is equal to node
      // current = node
      // while current.left val is equal to current.val
        // countCurrent ++
        // current = current.left
      // if countCurrent > ref[most]
        // delete ref[most]
        // most = current.val
        // ref[most] = currentCount
    // if left child is smaller
      // search(left)
    // if node has a right child
      // if right child is equal to node
        // current = node
        // while current.right equals current.val
          // countCurrent ++
          // current = current.right
        // if countCurrent > ref[most]
          // delete ref[most]
          // most = current.val
          // ref[most] = currentCount
        // if right child is greater
          // search(right)
  // if no children
    // return ref


// var most = root
// if left exists
  //


// function dfs takes root

  // visit node
  // dfs(left)
  // dfs(right)