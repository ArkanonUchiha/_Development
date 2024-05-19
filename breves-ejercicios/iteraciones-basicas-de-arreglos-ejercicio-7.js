// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 7: Recorrer un arreglo de números y encontrar el número más pequeño.


// USANDO FOR CLASICO
/*
const array = [100, 40, 200, 10, 115];
let minimo = array[0];

for(let i = 1; i < array.length; i++) {
  if(array[i] < minimo) {
    minimo = array[i]
  }
}

console.log(minimo);
*/


// USANDO FOR OF
/*
const array = [100, 40, 200, 10, 115];
let minimo = array[0];

for(let numero of array) {
  if(numero < minimo) {
    minimo = numero;
  }
}

console.log(minimo);
*/


// USANDO FOR IN
/*
const array = [100, 40, 200, 10, 115];
let menor = array[0];

for(let numero in array) {
  if(array[numero] < menor) {
    menor = array[numero];
  }
}

console.log(menor);
*/


// USANDO FOR EACH
/*
const array = [100, 40, 200, 10, 115];
let menor = array[0];

array.forEach(elemento => {
  if(elemento < menor) {
    menor = elemento;
  }
});

console.log(menor);
*/
