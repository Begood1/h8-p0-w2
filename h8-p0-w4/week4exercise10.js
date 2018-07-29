// Problem
// Given a checkAB (str) function that accepts a string parameter. function returns the value trueif in the string there are characters a and b that have a distance of 3 other characters at least once. If not found at all, return the value false.

// Code
   
function checkAB(num){
  checkA ="";
  checkB="";
  for(i = 0;i < num.length;i++){
    if(num[i] === 'a'){
      checkA = i;
    }
      else if(num[i] === 'b'){
        checkB=i;
    
    }
  }
  return checkA-checkB===4 || checkB-checkA===4;
}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false