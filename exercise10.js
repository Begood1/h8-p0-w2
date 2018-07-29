// Logic Challenge - Compare Numbers
// Problem
// Given a function compareAngka (number1, number2) which receives two numerical parameters. The function will return the true value if the numbers are greater than the number 1, and false otherwise. If both numbers are equal, the function will return -1.

// Code
function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if(angka1 === angka2){
    return -1
  }else if(angka1 < angka2){
    return true
  }
  return false
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

