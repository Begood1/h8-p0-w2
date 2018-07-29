
//LOOPING 
//1.Assemble the barisan bintang
var rows= 5
for(var i = 0;i <5;i++){
  console.log('*')
}

//LOOPING PROBLEM 2
//2.Arrange star line
var result ="";
for(var i = 0;i < 5;i++) {
  for(j = 0;j < 5;j++){
    //console.log('*')
    result+='*'
  }
  result+='\n'
}
console.log(result)

//3.Arrange star ladder

var result="";
for(i =0; i < 5;i++){
  result+="*";
  console.log(result);
}

