//Given a function delete the Symbol (str) that accepts a string parameter. Function will return a clean string of various symbols, leaving only az and numbers 0-9.


function hapusSimbol(str) {
  // you can only write your code here!
  return str.match(/[A-Z0-9]+/gi).join('')
}

// TEST CASES 
console . log ( hapusSimbol ( ' test% $ 4aa ' )); // test4aa 
console . log ( hapusSimbol ( ' devel0p3r s3j @@ ati ' )); // devel0p3rs3jati 
console . log ( hapusSimbol ( ' ma @ # k! an ~ ' )); // makan 
console . log ( hapusSimbol ( ' coding ' )); //coding 
console . log ( hapusSimbol ( ' 1 + 3-5 * 2 = 100 ' )); // 1352100

