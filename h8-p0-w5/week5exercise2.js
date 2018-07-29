
/*Given the Naik-Angkot function (Passenger list) which will receive a parameter in the form of a two-dimensional array. Function will return an array of objects.

Given a route, from A - F. Passengers are required to pay Rp. 2,000 each through one route.

Example: input: [['Dimitri', 'B', 'F']] output: [{passenger: 'Dimitri', rises from: 'B', destination: 'F', pay: 8000}]

                                                         
function naikAngkot(arrPenumpang) {
//var = result[]
route = ['A', 'B', 'C', 'D', 'E', 'F'];
var result =[]
for(let i = 0;i < arrPenumpang.length;i++){
  for(let j=0;j < route.length;j++){

    if(arrPenumpang[i][1] == route[j])
    var start =j
    else if(arrPenumpang[i][2] ==route)
    var end = j
    var price = Math.abs(start - end) * 2000;
    }
  var res = {penumpang:arrPenumpang[i][0],
            naikDari:arrPenumpang[i][1],
            tujuan:arrPenumpang[i][2],pay:price}
            result.push(res)
   }
            return result
}
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]