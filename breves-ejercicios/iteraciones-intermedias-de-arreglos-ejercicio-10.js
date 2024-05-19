// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 10: Dado un arreglo de números, devuelve un nuevo arreglo que contenga solo los números que sean divisibles por un número específico.


const ARREGLO = [5,100,359,752,10];
const FILTRADOS = [];

// USANDO FOR CLASICO
/*
for(let i = 0; i < ARREGLO.length; i++) {
  if(ARREGLO[i] % 2 === 0) {
    FILTRADOS.push(ARREGLO[i]);
  }
}
console.log(FILTRADOS);
*/


// USANDO FOR OF
/*
for(let numero of ARREGLO) {
  if(numero % 2 === 0) {
      FILTRADOS.push(numero);
  }
}
console.log(FILTRADOS);
*/


// USANDO FOR IN
/*
for(let numero in ARREGLO) {
  if(ARREGLO[numero] % 2 === 0) {
    FILTRADOS.push(ARREGLO[numero]);
  }
}
console.log(FILTRADOS);
*/


// USANDO FOR EACH
/*
ARREGLO.forEach(numero => {
  if(numero % 2 === 0) {
    FILTRADOS.push(numero);
  }
});
console.log(FILTRADOS);
*/


//USANDO METODO filter
/*
let resultado = ARREGLO.filter(numero => {
  if(numero % 2 === 0) {
    return numero;
  }
});
console.log(resultado);
*/
