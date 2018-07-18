var name = '';
var role = '';     

 if(name ==='' && role ===''){
 console.log('Name must be filled');
}

else if(role ===''){
    console.log('Hello '+name+ 'Choose your role to start the game!');
}
//}
 else if(role === 'knight'){
     console.log('wellcome to proxy world ' + role);
  console.log('Hello '+name+ ' Knight, you can attack with your weapons!');
 }   
else if(role ==='Doctor'){
      console.log('Welcome to Proxytia World '+role);
      console.log('Hello Doctor ' +name+ ' you will help your injured friend');
//}
  }else if(role === 'wizard') {
       console.log('Welcome to Proxytia World '+ name)
       console.log( name+ ' wizard !create a miracle that helps your victory!');
  }