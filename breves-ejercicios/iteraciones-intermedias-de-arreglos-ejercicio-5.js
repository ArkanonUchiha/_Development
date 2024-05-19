// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 5: Dado un arreglo de objetos, encuentra todos los objetos que tengan una propiedad específica con un valor mayor a un número dado.


const ARREGLO = [
  {nombre:"Brandon",apellido:"Martinez",edad:"29"},
  {nombre:"Diana",apellido:"Rosendo",edad:"25"},
  {id:"QLM",nombre:"Quetzalia",apellido:"Martinez",edad:"23"},
  {id:"JJLM",nombre:"Jonathan",apellido:"Lopez",edad:"27"}
];

// USANDO FOR CLASICO
/*
for(let i = 0; i < ARREGLO.length; i++) {
  if(JSON.parse(ARREGLO[i].edad) >= 25) {
    console.log(ARREGLO[i]);
  }
}
*/


// USANDO FOR OF
/*
for(let objeto of ARREGLO) {
  if(objeto.edad && JSON.parse(objeto.edad) >= 25) {
    console.log(objeto);
  }
}
*/


// USANDO FOR IN
/*
for(let objeto in ARREGLO) {
  if(ARREGLO[objeto].edad && JSON.parse(ARREGLO[objeto].edad) >= 25) {
    console.log(ARREGLO[objeto]);
  }
}
*/


// USANDO FOR EACH
/*
ARREGLO.forEach(objeto => {
  if(objeto.edad && JSON.parse(objeto.edad) >= 25) {
    console.log(objeto);
  }
});
*/
