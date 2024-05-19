/*
const ARREGLO = [5,100,359,752,10];

console.table([ARREGLO]);
console.table({ARREGLO});

window.prompt("Hola")
*/

function b(...x) {
  console.log(typeof x, x);
  x = [...x, 5, 6, 7];
  console.log(typeof x, x);
}

b(1,2,3,4);