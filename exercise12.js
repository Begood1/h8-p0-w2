// Problem
// Given a conversion function Minutes (minutes) that accept one parameter as a number which is a measure of time in minutes. Function will return the time string in hour format: minutes based on the minute. For example, if the minute is 63, then the function will return "1: 3".

// Code
function konversiMenit(menit) {
  // you can only write your code here!
  var hour=Math.floor(menit/60);
  var minutes = menit -(hour*60);
  return hour +':' +(minutes < 10 ? '0':'') + (menit -(hour * 60));
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00



