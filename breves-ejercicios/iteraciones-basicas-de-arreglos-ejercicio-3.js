// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 3: Recorrer un arreglo de cadenas de texto y concatenar todas las cadenas.


// USANDO FOR CLASICO
/*
const cadenas = ["Edwin","Brandon","Lopez","Martinez"];
let vacia = "";

for(let i = 0; i < cadenas.length; i++) {
  vacia += cadenas[i];
}
*/


// USANDO FOR OF
/*
const cadenas = ["Edwin","Brandon","Lopez","Martinez"];
let vacia = ""

for(let cadena of cadenas) {
  vacia += cadena
}
*/


// USANDO FOR IN
/*
const cadenas = ["EDWIN","BRANDON", "LOPEZ","MARTINEZ"];
let vacia = "";
for(let cadena in cadenas) {
  vacia += cadenas[cadena];
}
console.log(vacia);
*/


// USANDO FOR EACH
/*
const cadenas = ["EDWIN","BRANDON", "LOPEZ","MARTINEZ"];
let vacia = "";
cadenas.forEach(cadena => vacia += cadena);
console.log(vacia);
*/
