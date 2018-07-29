
// Task 1
// Create a function called shoutOut (), which returns a value of "Hello Function!", Which will then be displayed in the console.
function shoutOut(){
    return "Halo Function";
  }
  
  console.log(shoutOut()) // Menampilkan "Halo Function!" di console
  
  // Task 2
  // Create a function called calculateMultiply (), which returns the value of the result of two parameters sent.
  
  // / *
  //  MAKE CODE FUNCTION HERE 
  // * /
  // function calculateMultiply (num1, num2){
  
  //   return num1 * num2
  // }
  //  var num1 =  5 ;
  //  var num2 =  6 ;
  
  // var resultPerkalian =  calculateMultiply (num1, num2);
  // console . log (resultPerkalian); // Displays the number 30
  
  // Task 3
  // Create a function called processSentence (), which will process all the inputted parameters into the following sentence: "My name [Name], my age [Age] year, my address is in [Address], and I have a hobby [hobby]! "
  
  // / *
  //  MAKE CODE FUNCTION HERE 
  // * /
  
  function processSentence (){
    return ('My name is ' +name+', Iam '  +age+' years old,' + 'my address'+address+',I have a hobby that is ' +hobby)
  }
  
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence =  processSentence (name, age, address, hobby);
  console . log (fullSentence); // Showing "My name is Agus, I am 30 years old, my address is on Malioboro Street, Yogjakarta, and I have a hobby that is gaming !
  
