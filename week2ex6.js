//week2exercise6 proplem 1
var count = 2;
console.log('LOOPING PERTAMA');
    while (count  <= 20) {
     
      console.log(count ++,   '  - I love coding ');
     count++;
    }
 console.log('LOOPING KEDUA')  

var count = 20;
while (count >= 1){
console.log(count--,' - I will become fullstack developer');
count--;
}



//This is for loop
//exercise6 proplem 2

console.log('LOOPING PERTAMA')
for(var count = 1; count <= 20; count++) {
  console.log(count+ ' -  I love coding');
}


console.log('LOOPING DUA')
for(var count = 20; count > 0; count--) {

  console.log(count+ ' -   I will become fullstack developer');
  
}
// 3. Odd and Even Number
// Hint: You will use conditional as well in this case.

// Problem
// Make a loop 1 - 100 with the addition of counters 1
// In the iteration, check each counter count :
// If the counter number is an even number, write GENAP
// If the counter number is an odd number, write the ODD
// Make 3 new loops from 1 - 100, with counters increments of 2, 5, and 9.
// On 3 of these new loops check each number of counters :
// If not a specified multiplier there is no need to write anything down
// If the counter number is a multiple of 3 by increment 2, multiples of 6 by increments of 5, and multiples of 10 by increments of 9, write:
// "3 kelipatan 3" etc.

var counter = 1;
for(var i = 1;i <= 100;i++){
  if(i % 2 === 0){
    console.log('GENAP');
  }else{
    console.log('ODD')
  }
}
for(var j = 1;j <=100;j+=2){
  var counter=j
  if(j % 3 === 0){
    console.log(j +'kelipatan'+j);
  }
}
for(var k = 1;k <=100;k+=5){
  var counter = k
  if(k % 6 === 0){
    console.log(k +'kelipatan'+ k);
  }
}
for(var l = 1;l <=100;l+=9){
  var counter= l
  if(l % 10 === 0){
    console.log(l +'kelipatan'+ l);
  }
}




