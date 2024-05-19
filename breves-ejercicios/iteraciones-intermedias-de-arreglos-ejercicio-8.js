// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 8: Dado un arreglo de objetos, encuentra todos los objetos que tengan una propiedad específica que contenga una palabra específica.


const ARREGLO = [
  {nombre:"Brandon",apellido:"Martinez",edad:"29"},
  {nombre:"Diana",apellido:"Rosendo",edad:"25"},
  {identificador:"QLM",nombre:"Quetzalia",apellido:"Martinez",edad:"23"},
  {identificador:"JJLM",nombre:"Jonathan",apellido:"Lopez",edad:"27"},
  {identificador:"",nombre:"Alejandro",apellido:"Magno",edad:"33"}
];

// USANDO FOR CLASICO
/*
for(let i = 0; i < ARREGLO.length; i++) {
  if(Object.keys(ARREGLO[i]).indexOf("identificador") !== -1) {
    console.log(ARREGLO[i]);
  }
}
*/

/*
for(let i = 0; i < ARREGLO.length; i++) {
  if(Object.keys(ARREGLO[i]).includes("identificador")) {
    console.log(ARREGLO[i]);
  }
}
*/


// USANDO FOR OF
/*
for(let objeto of ARREGLO) {
  if(Object.keys(objeto).indexOf("identificador") !== -1) {
    console.log(objeto);
  }
}
*/

/*
for(let objeto of ARREGLO) {
  if(Object.keys(objeto).includes("identificador")) {
    console.log(objeto);
  }
}
*/


// USANDO FOR IN
/*
for(let objeto in ARREGLO) {
  if(Object.keys(ARREGLO[objeto]).indexOf("identificador") !== -1) {
    console.log(ARREGLO[objeto]);
  }
}
*/

/*
for(let objeto in ARREGLO) {
  if(Object.keys(ARREGLO[objeto]).includes("identificador")) {
    console.log(ARREGLO[objeto]);
  }
}
*/


// USANDO FOR EACH
/*
ARREGLO.forEach(objeto => {
  if(Object.keys(objeto).indexOf("identificador") !== -1) {
    console.log(objeto);
  }  
});
*/

/*
ARREGLO.forEach(objeto => {
  if(Object.keys(objeto).includes("identificador")) {
    console.log(objeto);
  }  
});
*/
