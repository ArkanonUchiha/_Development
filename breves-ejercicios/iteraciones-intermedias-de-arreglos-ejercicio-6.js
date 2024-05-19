// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 6: Dado un arreglo de strings, devuelve un nuevo arreglo que contenga solo los strings que contengan una letra específica.


const ARREGLO = ["Coco","GUAYABA","Limon","Manzana","Nuez","Uva"];
let FILTRADOS = [];

// USANDO FOR CLASICO
/*
for(let i = 0; i < ARREGLO.length; i++) {
  if(ARREGLO[i].toLowerCase().indexOf("a") !== -1) {
    FILTRADOS.push(ARREGLO[i]);
  }
}
console.log(FILTRADOS);
*/

/*
for(let i = 0; i < ARREGLO.length; i++) {
  if(ARREGLO[i].toLowerCase().includes("a")) {
    FILTRADOS.push(ARREGLO[i]);
  }
}
console.log(FILTRADOS);
*/


// USANDO FOR OF
/*
for(let cadena of ARREGLO) {
  if(cadena.toLowerCase().indexOf("a") !== -1) {
    FILTRADOS.push(cadena);
  }
}
console.log(FILTRADOS);
*/

/*
for(let cadena of ARREGLO) {
  if(cadena.toLowerCase().includes("a")) {
    FILTRADOS.push(cadena);
  }
}
console.log(FILTRADOS);
*/


// USANDO FOR IN
/*
for(let cadena in ARREGLO) {
  if(ARREGLO[cadena].toLowerCase().indexOf("a") !== -1) {
    FILTRADOS.push(ARREGLO[cadena]);
  }
}
console.log(FILTRADOS);
*/

/*
for(let cadena in ARREGLO) {
  if(ARREGLO[cadena].toLowerCase().includes("a")) {
    FILTRADOS.push(ARREGLO[cadena]);
  }
}
console.log(FILTRADOS);
*/


// USANDO FOR EACH
/*
ARREGLO.forEach(cadena => {
  if(cadena.toLowerCase().indexOf("a") !== -1) {
    return FILTRADOS.push(cadena);
  }
});
console.log(FILTRADOS);
*/

/*
ARREGLO.forEach(cadena => {
  if(cadena.toLowerCase().includes("a")) {
    FILTRADOS.push(cadena);
  }
});
console.log(FILTRADOS);
*/


// USANDO METODO FILTER
/*
let resultado = ARREGLO.filter(cadena => {
  if(cadena.toLowerCase().indexOf("a") !== -1) {
    return FILTRADOS.push(cadena);
  }
});
console.log(resultado);
*/

/*
let resultado = ARREGLO.filter(cadena => {
  if(cadena.toLowerCase().includes("a")) {
    return FILTRADOS.push(cadena);
  }
});
console.log(resultado);
*/
