var date = 2;
var month = 10;
var year = 2018;
var result = date + ' ' + month + ' '+ year;

if(date > 1 && date < 32) {
switch(month) {
     case 1:  { month = 'january'; 
      result = date + '  ' + month + ' ' + year;  break;}
        
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

    console.log(result);



