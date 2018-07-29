function hitungHuruf(kata) {

 var Katabaru = kata.split(' ');
 var result=[];
 
 for(var i=0; i<Katabaru.length; i++){
   var Katabaru2= (Katabaru[i].split('').sort());
  
   for(var j=0; j<Katabaru2.length; j++){
     
     if(Katabaru2[j]===Katabaru2[j+1]){
       result.push(Katabaru[i]);
     }
    }
  }
      
    return result[0]
}
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau