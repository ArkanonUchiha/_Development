// https://www.youtube.com/watch?v=aOH4b3JViYA&ab_channel=midulive

/*
function saludar(nombre) {
  console.log(arguments, typeof arguments);
  console.log('Soy ' + nombre);
  
  let argumentos = Object.entries(arguments);
  console.log(argumentos);
}

saludar('Brandon', 30, true);
*/


// UNA FUNCION DE FLECHA NO CREA EL OBJETO arguments COMO PASA EN UNA FUNCION TRADICIONAL
/*
let despedir = () => {
    console.log(arguments, typeof arguments);
}
despedir('Edwin', 'Brandon', 30, true);
*/


let despedir2 = (arguments) => {
    console.log(arguments, typeof arguments);
}
despedir2('Edwin', 'Brandon', 30, true);


// POR LO QUE TIENE QUE USARSE EL REST PARAMETERS
let despedir3 = (...arguments) => {
    console.log(arguments, typeof arguments);
}
despedir3('Edwin', 'Brandon', 30, true);



// NO PUEDEN PONERSE MAS PARAMETROS DESPUÉS DEL REST PARAMETERS. DA ERROR DE SINTAXIS.
/*
let despedir4 = (...arguments, edad) => {
    console.log(arguments, typeof arguments);
}
despedir4('Edwin', 'Brandon', 30, true);
*/



// LOS PARAMETROS QUE QUERAMOS INDIVIDUALES DEBEN DE ESTAR ANTES DEL REST PARAMETERS Y SE MANEJAN COMO VARIABLES INDIVIDUALES
let despedir4 = (nombre, ...arguments) => {
    console.log(nombre, arguments, typeof arguments);
}
despedir4('Edwin', 'Brandon', 30, true);

