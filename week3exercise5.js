function palindrome(word) {
  // you can only write your code here!
  var message ='';
  for(var i= word.length-1;i>=0;i--){
     message = message + word[i];
  }
  if( message === word){
    return true;
  }else{
       return false;
  }
  
  
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false