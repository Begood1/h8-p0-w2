function angkaPalindrome(num) {
  // you can only write your code here!
if(num < 9){
  return num + 1;
}else{
  for(var i = num;i <=1001;i++){
    var number = [i].toString()
    number=number.split("")
    number=number.reverse()
    number=number.join("")
    if(i ==number){
      return i;
    }
  }
}

}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001




