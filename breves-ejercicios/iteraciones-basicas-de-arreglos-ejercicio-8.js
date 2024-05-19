// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 8: Recorrer un arreglo de números y calcular el promedio de todos los elementos.


// USANDO FOR CLASICO
/*
const numeros = [9,8,6,10,5];
let promedio = 0;

for(let i = 0; i < numeros.length; i++) {
  promedio += numeros[i];
}

promedio /= numeros.length;
*/


// USANDO FOR OF
/*
const numeros = [9,8,6,10,5];
let promedio = 0;

for(let numero of numeros) {
  promedio += numero;
}

promedio /= numeros.length;
*/


// USANDO FOR IN
/*
const numeros = [9,8,6,10,5];
let promedio = 0;

for(let numero in numeros) {
  promedio += numeros[numero];
}

console.log(promedio /= numeros.length);
*/


// USANDO FOR EACH
/*
const numeros = [9,8,6,10,5];
let promedio = 0;

numeros.forEach(elemento => {
  promedio += elemento;
});

console.log(promedio /= numeros.length);
*/
