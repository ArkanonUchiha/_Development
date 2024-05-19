// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 2: Recorrer un arreglo de números y sumar todos los elementos.


// USANDO FOR CLASICO
/*
const numeros = [5,100,14,20,25];
let resultado = 0;

for(let i = 0; i < numeros.length; i++) {
  resultado += numeros[i]
}
*/


// USANDO FOR OF
/*
const numeros = [5,100,14,20,25];
let resultado = 0;

for(let numero of numeros) {
  resultado += numero
}
*/


// USANDO FOR IN
/*
const numeros = [5,100,14,20,25];
let resultado = 0;
for(let numero in numeros) {
  resultado += numeros[numero];
}

console.log(resultado);
*/


// USANDO FOR EACH
/*
const numeros = [5,100,14,20,25];
let resultado = 0;
numeros.forEach(numero => resultado += numero);
console.log(resultado);
*/
