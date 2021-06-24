/*
This question is asked by Google. Given a string only containing the following characters (, ), {, }, [, and ] return whether or not the opening and closing characters are in a valid order.

Ex: Given the following strings...

"(){}[]", return true
"(({[]}))", return true
"{(})", return false
*/

var validateCharacters = (string) => {


}

// create a stack array
// create a ref obj with opening braces as keys and closing braces as valies

// iterate over string
  // if current char exists as key in ref aka it is an opening brace
    // push its value (aka the respective closing brace) to the stack
  // else (means it is a closing brace)
    // if current char is not equal to the last value popped off of stack
      // it's an invalid parens arrangement

// if all opening and closing braces match and in the correct order, the stack should be empty by now, so:
// return whether stack.length is 0