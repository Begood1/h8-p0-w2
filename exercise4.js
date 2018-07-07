var name = 'sami';
var role = 'witch';     

 if(name ==='' && role ===''){
console.log('Name must be filled');
}

else if(name === 'geze' && role === ''){
    console.log('Hello Geze, Choose your role to start the game!');

}
else if(name === ''|| role === 'Knight'){
   console.log('wellcome to proxy world sami');
   console.log('Hello Nina Knight, you can attack with your weapons!');
}else if(name === 'nina'|| role ==='Doctor'){
    console.log('Welcome to Proxytia World, Doctor');
    console.log('Hello Doctor sami, you will help your injured friend');

}else if (name !== '' || role === 'witch') {
     console.log('Welcome to Proxytia World,John')
     console.log(' Hello john !, create a miracle that helps your victory!')
}

 

// Output for Input name = '' and role = '' 
//" Name must be filled! "

// Output for Input name = 'Mikael' and role = '' 
//" Hello Mikael, Choose your role to start the game! "

// Output for Input name = 'Nina' and role 'Knight' 
//" Welcome to Proxytia World, Nina " 
//" Hello Nina Knight, you can attack with your weapons! "

// Output for Input Name = 'Danu' and the role of 'Doctor' 
//" Welcome to Proxytia World, Danu " 
//" Hello Doctor Danu, you will help your injured friend. "

// Output for Input Name = 'Zero' and the role of 'Wizard' 
//" Welcome to Proxytia World, Zero " 
//" Hello Wizard Zero, create a miracle that helps your victory! "