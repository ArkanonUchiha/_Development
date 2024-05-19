// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 6: Recorrer un arreglo de números y encontrar el número más grande.


// USANDO FOR CLASICO
/*
const array = [10, 40, 200, 90, 15];
let maximo = array[0];

for(let i = 1; i < array.length; i++) {
  if(array[i] > maximo) {
    maximo = array[i];
  }
}

console.log(maximo);
*/


// USANDO FOR OF
/*
const array = [10, 40, 200, 90, 15];
let maximo = array[0];

for(let numero of array) {
  if(numero > maximo) {
    maximo = numero;
  }
}

console.log(maximo);
*/


// USANDO FOR IN
/*
const array = [10, 40, 200, 90, 15];
let mayor = array[0];

for(let numero in array) {
  if(array[numero] > mayor) {
    mayor = array[numero];
  }
}

console.log(mayor);
*/


// USANDO FOR EACH
/*
const array = [10, 40, 200, 90, 15];
let mayor = array[0];
array.forEach(elemento => {
  if(elemento > mayor) {
    mayor = elemento;
  }
});
console.log(mayor);
*/
