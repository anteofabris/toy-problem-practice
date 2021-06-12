/* Write an algorithm such that if an element
in an MxN matrix is 0, its entire row and
column are set to 0

[ 1, 1, 1, 1, 1, 0, 1]
[ 1, 1, 1, 1, 1, 1, 1]
[ 1, 1, 1, 1, 1, 1, 1]
[ 1, 1, 1, 1, 1, 1, 1]
[ 1, 1, 1, 1, 1, 1, 1]

becomes

[ 0, 0, 0, 0, 0, 0, 0]
[ 1, 1, 1, 1, 1, 0, 1]
[ 1, 1, 1, 1, 1, 0, 1]
[ 1, 1, 1, 1, 1, 0, 1]
[ 1, 1, 1, 1, 1, 0, 1]

*/

// create a reference array to store what a typical row will look like (aka one that doesn't initially contain any zeros)
// create an array of all zeros matching the length of matrix row
// create a hasZero array to store indexes of matrix arrays cointaining at least one zero

// iterate over the matrix
// every time a 0 is encountered in the matrix, it is noted as a zero-having array (which will turn into an array of all zeros), and its index is noted in the reference object, where a zero will replace what is in that index

// create a new matrix: each array will either be a zero array or the reference array

// return the array