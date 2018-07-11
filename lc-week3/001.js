Competencies: Pseudocode

// Buatlah Pseudocode untuk kasus berikut:
// Sebuah perahu layar sedang melaju dengan kecepatan 30km/jam
// Perahu tersebut dipengaruhi oleh kecepatan ombak yang berlawanan dengan arah lain

// - Jika ombak dibawah 1 meter maka kecepatan tetap.
// - Jika ombak setinggi 1 meter maka kecepatan akan berkurang sebesar 7km/jam
// - Jika ombak setinggi 2 meter maka kecepatan akan berkurang sebesar 15km/jam
// - Jika ombak lebih tinggi daripada 2 meter maka perahu akan terbalik, sehingga kecepatan menjadi 0km/jam

// Tampilkan kecepatan perahu jika di depan ada ombak setinggi x meter

Create Pseudocode for the following cases:
A sailboat was traveling at 30km / h
The boat is affected by the wave velocity opposite to the other direction

- If the waves below 1 meter the speed remains.
- If the wave is 1 meter high then the speed will decrease by 7km / jam
- If the waves as high as 2 meters then the speed will be reduced by 15km / jam
- If the wave is higher than 2 meters then the boat will be inverted, so the speed becomes 0km / jam

Show the speed of the boat if in front there are waves as high as x meters

sailbat traveling == 30 km;
speed - distance/time
       if wave 1 the spead remain 
       otherwise if the wave is high

       spead will decrease by 7km/h

       otherwise if the wave is higher than 2 meter
       theboat will inverted.
  
     var  wave = 0;

     if(wave !== '1'){
         console.log('the spead remain the some');
     }else if(wave === '1m'){
         console.log(' spead decrease by 7km/h');
     }else if(wave === '2m'){
         console.log('spead is reduced by 15km/h');
     }else if(wave > '2m'){
         console.log('spead become 0km/h');
     }else 
           ('the spead of the boat is high as x meter')
           