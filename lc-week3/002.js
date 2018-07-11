/*
Competencies: Function and Conditionals

Instruksi
-------------------------------
Dalam suaru antrian terdapat 3 loket pelayanan 
Loket A akan melayani pelanggan dengan nomor urut 1, 4, 7, 10
Loket B akan melayani pelanggan dengan nomor urut 2, 5, 8, 11
Loket C akan melayani pelanggan dengan nomor urut 3, 6, 9, 12

Dan pada antrian ini hanya ada 12 antrian.

Jika nomor antrian lebih besar dari 12 atau lebih kecil dari 1, maka tampilkan "Nomor antrian invalid"

Buatlah function loketPelayan yang menerima input berupa nomor antrian dan 
mengembalikan Loket yang akan memberikan pelayanan.
Note:
- function locketPelayanan hanya menerima 1 parameter berupa angka
- gunakan conditional, dapat berupa if-else atau switch-case statement 
*/

// function loketPelayan(nomorUrut) {
//   // Your codes here.
// }

// console.log(loketPelayan(1)); // Layanan Loket A
// console.log(loketPelayan(5)); // Layanan Loket B
// console.log(loketPelayan(6)); // Layanan Loket C

//English

//Competencies: Function and Conditionals

// Instructions
// -------------------------------
// In queuing queens there are 3 service counters
// Counter A will serve customers with serial number 1, 4, 7, 10
// Counter B will serve customers with serial number 2, 5, 8, 11
// Counter C will serve customers with serial number 3, 6, 9, 12

// And on this queue there are only 12 queues.

// If the queue number is greater than 12 or less than 1, then show "Invalid queue number"

// Create a function counter The waiter that receives input is a queue number and
// returns Counters that will provide service.
// Note:
// - function locketThe service only accepts 1 parameter in the form of numbers
// - use conditional, can be if-else or switch-case statement
// * /
function CounterWaiter(nomorUrut) {
  // Your codes here.
  switch(nomorUrut){
    case 1:
      return 'Layanan Loket A';
      break;
    case 4:
      return 'Layanan Loket A';
      break;
    case 7:
      return 'Layanan Loket A';
      break;
    case 10:
      return 'Layanan Loket A';
      break;
 
    case 2:
      return 'Layanan Loket B';
      break;
    case 5:
      return 'Layanan Loket B';
      break;
    case 8:
      return 'Layanan Loket B';
      break;
    case 11:
      return 'Layanan Loket B';
      break;
 
    case 3:
      return 'Layanan Loket C';
      break;
    case 6:
      return 'Layanan Loket C';
      break;
    case 9:
      return 'Layanan Loket C';
      break;
    case 12:
      return 'Layanan Loket C';
      break;
  }
  if (nomorUrut < 1 || nomorUrut >12){
    return 'Nomor antrian invalid';
  } else{
    return 'input does not have a numeric value';
  }
 }
console.log (CounterWaiter (1)); // Counter Services A
console.log (CounterWaiter (5)); // Counter Services B
console.log (CounterWaiter (6)); // Counter Services C