function dataHandiling2(array){


array.splice(1,1,"Roman Alamsyah Elsharawy");
array.splice(2,1,"Bandar//Lampung Province");

 array.splice(4,3,"Male");
array.splice(6,0,"SMA International Metro")
array.join()
var date = 21;
var month =05;
var year =1989;
var dates =array[3].split("/ ")
//dates.sort(function(a,b){return b-a});
 //array.sort(function(a-b{

 
console.log(array)
console.log(dates.join("-"));
//console.logdates.sort()
//consolo.log(array[3,3].split(


//var date = 21;
//var month = 05;
//var year = 1989;
//var result = date + ' ' + month + ' '+ year;

if(date > 1 && date < 32) {
switch(month) {
     case 1:  { month = 'january'; 
      result = date+ ' '+ month+ ''+ year;  break;}
        
    case 2:    { month = 'february'; 
     result = date + ' ' + month + ' ' + year;  break;}

    case 3:    { month = 'march'; 
     result = date + ' ' + month + ' ' + year;  break;}

    case 4:    { month = 'april'; 
     result = date + ' ' + month + ' ' + year;  break;}
    case 5:    { month = 'may'; 
     result = date + ' ' + month + ' ' + year;  break;}
    case 6:    { month = 'june'; 
     result = date + ' ' + month + ' ' + year;  break;}
    case 7:    { month = 'july'; 
     result = date + ' ' + month + ' ' + year;  break;}
    case 8:    { month = 'augest'; 
     result = date + ' ' + month + ' ' + year;  break;}
    case 9:    { month = 'september';
      result = date + ' ' + month + ' ' + year;  break;}
    case 10:    { month = 'october'; 
     result = date + ' ' + month + ' ' + year;  break;}
    case 11:    { month = 'november'; 
     result = date + ' ' + month + ' ' + year;  break;}
    case 12:    { month = 'december'; 
     result = date + ' ' + month + ' ' + year;  break;}
    default:     { result  = 'no file Available';}
}
    

}else
    
{
    result = 'no file available'
}

    //console.log(result);
    console.log(month);
   console.log(result);
   //console.log("Roman Alamsyah ")

}
//}
//}


var array = (
[ "0001" , "Roman Alamsyah" , "Bandar Lampung" , "21/05/1989" , "Reading" ])

  
dataHandiling2(array)

