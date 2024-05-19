// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 1: Dado un arreglo de números, encuentra el número más grande.


const numeros = [5,100,356,752,10];

// USANDO FOR CLASICO
/*
let mayor = numeros[0];
for(let i = 0; i < numeros.length; i++) {
  if(numeros[i] > mayor) {
    mayor = numeros[i];
  }
}
console.log(mayor);
*/


// USANDO FOR OF
/*
let mayor = numeros[0];
for(let numero of numeros) {
  if(numero > mayor) {
    mayor = numero;
  }
}
console.log(mayor);
*/


// USANDO FOR IN
/*
let mayor = numeros[0];
for(let numero in numeros) {
  if(numeros[numero] > mayor) {
    mayor = numeros[numero];
  }
}
console.log(mayor);
*/


// USANDO FOR EACH
/*
let mayor = numeros[0];
numeros.forEach((numero) => {
  if(numero > mayor) {
    mayor = numero;
  }
});
console.log(mayor);
*/
