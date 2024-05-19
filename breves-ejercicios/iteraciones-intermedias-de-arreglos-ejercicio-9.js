// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 9: Dado un arreglo de strings, devuelve un nuevo arreglo que contenga solo los strings que tengan una longitud mayor a un número dado.


const ARREGLO = ["Edwin","Brandon","Lopez","Martinez","LOME930704HCSPRD02"];
let LARGAS = [];

// USANDO FOR CLASICO
/*
for(let i = 0; i < ARREGLO.length; i++) {
  if(ARREGLO[i].length >= 7) {
    LARGAS.push(ARREGLO[i]);
  }
}
console.log(LARGAS);
*/


// USANDO FOR OF
/*
for(let cadena of ARREGLO) {
  if(cadena.length >= 7) {
    LARGAS.push(cadena);
  }
}
console.log(LARGAS);
*/


// USANDO FOR IN
/*
for(let cadena in ARREGLO) {
  if(ARREGLO[cadena].length >= 7) {
    LARGAS.push(ARREGLO[cadena]);
  }
}
console.log(LARGAS);
*/


// USANDO FOR EACH
/*
ARREGLO.forEach(cadena => {
  if(cadena.length >= 7) {
    LARGAS.push(cadena);
  }  
});
console.log(LARGAS);
*/


// USANDO METODO filter
/*
let filtrados = ARREGLO.filter(cadena => {
  if(cadena.length >= 7) {
    return cadena
  }
});
console.log(filtrados);
*/


// USANDO METODO map
/*
let mapeados = ARREGLO.map(cadena => {
  if(cadena.length >= 7) {
    return cadena;
  } else {
    return '';
  }
});
console.log(mapeados);
*/
