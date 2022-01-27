const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];
 

  function primos(num){
    
    let flag=true;
    for(i=2; i< num; i++){  
        if(num % i===0){ 
          flag=false;
          break;
        }
    }
    if(flag){
      console.log(`${num} es primo`);
    }
  }
  
  console.log("Andrea L. Hernandez EJERCICIO 1");
  ejercicio1.forEach((num) => {
     primos(num);
  });
  
  
  const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];

  function verificar (persona){

    if(persona.esFamiliar && persona.edad>=18){
      console.log(`${persona.nombre} si puede entrar`);
    }
  }
  console.log("Andrea L. Hernandez EJERCICIO 2");
  ejercicio2.forEach((persona)=> {
    verificar(persona);
 });
 
 console.log("Andrea L. Hernandez EJERCICIO 3");
 function serFibo(){
   let x=0, y=1, z;
   
   for(let i=2; i<=50; i++){
     //console.log(z);
     z=x+y;
     x=y;
     y=z;
      console.log(z);
   }
    
 }

 serFibo();