
// Logic Challenge - X dan O
// Problem
// Given a function xo (str) that accepts a string parameter. Function will return true if the number of characters x equals the number of characters o, and false if not.

// Code
function xo(str) {
  // you can only write your code here!
  if(str.split('o').length-1 === str.split('x').length-1){
    return true
  }else
      return false
}

// TEST CASES 
console . log ( xo ( ' xoxoxo ' )); // true 
console . log ( xo ( ' oxooxo ' )); // false 
console . log ( xo ( ' oxo ' )); // false 
console . log ( xo ( ' xxxooo ' )); // true 
console . log(xo('xoxooxxo')); // true



