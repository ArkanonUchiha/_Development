// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 1: Recorrer un arreglo y mostrar cada elemento por consola.


// USANDO FOR CLASICO
/*
const arreglo = ["A", "B", "C", "D", "E"];
for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}
*/


// USANDO FOR OF
/*
const arreglo = ["A", "B", "C", "D", "E"];
for (let elemento of arreglo) {
  console.log(elemento);
}
*/


// USANDO FOR IN CON ARREGLO
/*
const arreglo = ["A","B","C","D","E"];
for(let caracter in arreglo) {
  console.log(caracter, typeof caracter);
  console.log(arreglo[caracter]);
}
*/

// USANDO FOR IN CON OBJETO
/*
const objeto = {
  nombre: "Brandon",
  edad: "29"
};
for(let propiedad in objeto) {
  console.log(propiedad, objeto[propiedad]);
}
*/


// USANDO FOR EACH
/*
const arreglo = ["A", "B", "C", "D", "E"];
arreglo.forEach(elemento => console.log(elemento));
*/
