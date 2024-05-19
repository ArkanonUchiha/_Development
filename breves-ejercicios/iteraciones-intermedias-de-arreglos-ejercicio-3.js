// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 3: Dado un arreglo de números, devuelve un nuevo arreglo que contenga solo los números pares.


const ARREGLO = [1,2,3,4,5,6,7,8,9,10];
const PARES = [];
const IMPARES = [];

// USANDO FOR CLASICO
/*
for(let i = 0; i < ARREGLO.length; i++) {
  ARREGLO[i] % 2 ? IMPARES.push(ARREGLO[i]) : PARES.push(ARREGLO[i]);
}
console.log(IMPARES);
console.log(PARES);
*/


// USANDO FOR OF
/*
for(let numero of ARREGLO) {
  numero % 2 ? IMPARES.push(numero) : PARES.push(numero);
}
console.log(IMPARES);
console.log(PARES);
*/


// USANDO FOR IN
/*
for(let numero in ARREGLO) {
  ARREGLO[numero] % 2 ? IMPARES.push(ARREGLO[numero]) : PARES.push(ARREGLO[numero]);
}
console.log(IMPARES);
console.log(PARES);
*/


// USANDO FOR EACH
/*
ARREGLO.forEach(numero => {
  numero % 2 ? IMPARES.push(numero) : PARES.push(numero);
});
console.log(IMPARES);
console.log(PARES);
*/
