// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 2: Dado un arreglo de strings, concatena todos los elementos del arreglo en una sola cadena separada por comas.


const cadenas = ["Edwin","Brandon","Lopez","Martinez","LOME930704HCSPRD02"];
let unidas = "";
let ultimo = cadenas.length - 1;

// USANDO FOR CLASICO
/*
for(let i = 0; i < cadenas.length; i++) {
  if(i == cadenas.length -1) {
    unidas += cadenas[i]
  } else {
    unidas += cadenas[i] + ", "
  }
}
console.log(unidas);
*/

/*
for(let i = 0; i < cadenas.length; i++) {
  if(unidas === "") {
    unidas += cadenas[i]
  } else {
    unidas += ", " + cadenas[i];
  }
}
console.log(unidas);
*/


// USANDO FOR OF
/*
for(let cadena of cadenas) {
  if(ultimo == cadenas.indexOf(cadena)) {
    unidas += cadena;
  } else {
    unidas += cadena + ", ";
  }
}
console.log(unidas);
*/


// USANDO FOR IN
/*
for(let cadena in cadenas) {
  if(unidas === "") {
    unidas += cadenas[cadena];
  } else {
    unidas += ", " + cadenas[cadena];
  }
}
console.log(unidas);
*/


// USANDO FOR EACH
/*
cadenas.forEach(cadena => {
  if(unidas === "") {
    unidas += cadena;
  } else {
    unidas += ", " + cadena;
  }
});
console.log(unidas);
*/


// USANDO METODO JOIN
/*
console.log(cadenas.join(", "));
*/
