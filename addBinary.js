/* This question is asked by Apple. Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
Note: neither binary string will contain leading 0s unless the string itself is 0 */

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"

var addBinary = (string1, string2) => {

// declare a print variable set to empty string
var print = ''
// declare a carry variable set to 0
var carry = 0

// add a string 0 to beginning of string1
string1 = '0' + string1
// add a string 0 to beginning of string2
string2 = '0' + string2

// declare a string1Index, set to last index
var string1Index = string1.length - 1
// declare a string2Index, set to last index
var string2Index = string2.length - 1


// while both string1Index and string2Index are greater than 0
while (string1Index > 0 || string2Index > 0) {
  // var result = the num of string1 at string1Index plus the num of string2 at string2Index plus the carry value
  var result = Number(string1[string1Index]) + Number(string2[string2Index]) + carry
  console.log('result: ', result)
  // if result is 0
  if (result === 0) {
    // add a string 0 to the beginning of print
    print = '0' + print
    // set carry to 0
    carry = 0
  }
  // if result is 1
  if (result === 1) {
    // add a string 1 to the beginning of print
    print = '1' + print
    // set carry to 0
    carry = 0
  }
  // if result is 2
  if (result === 2) {
    // add a string 0 to the beginning of print
    print = '0' + print
    // set carry to 1
    carry = 1
  }
  // if result is 3
  if (result === 3) {
    // add a string 1 to the beginning of print
    print = '1' + print
    // set carry to 1
    carry = 1
  }

  // if string1Index is not 0
  if (string1Index !== 0) {
    // string1Index --
    string1Index --
  }
  // if string2Index is not 0
  if (string2Index !== 0) {
    // string2Index --
    string2Index --
  }

  console.log('print: ', print)
}

if (carry > 0) {
  print = carry.toString() + print
}

// return print
return print;

}

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"

var test1 = addBinary('100', '1');
// var test2 = addBinary('11', '1');
// var test3 = addBinary('1', '0');

console.log(test1)

// declare a print variable set to empty string
// declare a carry variable set to 0

// add a string 0 to beginning of string1
// add a string 0 to beginning of string2

// declare a string1Index, set to last index
// declare a string2Index, set to last index


// while both string1Index and string2Index are greater than 0
  // var result = the num of string1 at string1Index plus the num of string2 at string2Index plus the carry value
  // if result is 0
    // add a string 0 to the beginning of print
    // set carry to 0
  // if result is 1
    // add a string 1 to the beginning of print
    // set carry to 0
  // if result is 2
    // add a string 0 to the beginning of print
    // set carry to 1
  // if result is 3
    // add a string 1 to the beginning of print
    // set carry to 1

  // if string1Index is not 0
    // string1Index --
  // if string2Index is not 0
    // string2Index --


// return print