// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 4: Dado un arreglo de objetos, encuentra el objeto con la propiedad "id" igual a un valor específico.


const ARREGLO = [
  {nombre:"Brandon",apellido:"Martinez",edad:"29"},
  {nombre:"Diana",apellido:"Rosendo",edad:"25"},
  {id:"QLM",nombre:"Quetzalia",apellido:"Martinez",edad:"23"},
  {id:"JJLM",nombre:"Jonathan",apellido:"Lopez",edad:"27"}
];

// USANDO FOR CLASICO
/*
for(let i = 0; i < ARREGLO.length; i++) {
  if(ARREGLO[i].id && ARREGLO[i].id === "JJLM") {
    console.log(ARREGLO[i]);
  }
}
*/


// USANDO FOR OF
/*
for(let objeto of ARREGLO) {
  if(objeto.id && objeto.id === "JJLM") {
    console.log(objeto);
  }
}
*/


// USANDO FOR IN
/*
for(let objeto in ARREGLO) {
  if(ARREGLO[objeto].id && ARREGLO[objeto].id === "JJLM") { 
    console.log(ARREGLO[objeto]);
  }
}
*/


// USANDO FOR EACH
/*
ARREGLO.forEach(objeto => {
  if(objeto.id && objeto.id === "JJLM") {
    console.log(objeto);
  }
});
*/
