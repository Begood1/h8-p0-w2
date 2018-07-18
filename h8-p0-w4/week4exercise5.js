function ubahHuruf(word) {
  // you can only write your code here!
  var alphapet = "abcdefghijklmnopqrstuvwxyz";

 var shift = " ";
 for(var i = 0;i < word.length;i++) {
   for(var j = 0;j < alphapet.length;j++){
     if(word[i]=== alphapet[j]){ 
     shift+=alphapet[j+1]
     
   }
   }
 }
 return shift
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu