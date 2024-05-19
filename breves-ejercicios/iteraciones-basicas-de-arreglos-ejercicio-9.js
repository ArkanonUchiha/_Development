// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 9: Recorrer un arreglo de cadenas de texto y encontrar la cadena más larga.


// USANDO FOR CLASICO
/*
const textos = ["Edwin","Brandon","Lopez","Martinez","LOME930704HCSPRD02"];
let large = textos[0].length;
let nombre = textos[0];

for(let i = 1; i < textos.length; i++) {
  if(textos[i].length > large) {
    large = textos[i].length;
    nombre = textos[i];
  }
}

console.log(large, nombre);
*/


// USANDO FOR OF
/*
const textos = ["Edwin","Brandon","Lopez","Martinez","LOME930704HCSPRD02"];
let large = textos[0].length;
let nombre = textos[0];

for(let texto of textos) {
  if(texto.length > large) {
    large = texto.length;
    nombre = texto;
  }
}

console.log(large, nombre);
*/


// USANDO FOR IN
/*
const textos = ["Edwin","Brandon","Lopez","Martinez","LOME930704HCSPRD02"];
let larga = textos[0].length;
let nombre = textos[0];

for(let texto in textos) {
  if(textos[texto].length > larga) {
    larga = textos[texto].length;
    nombre = textos[texto];
  }
}

console.log(larga, nombre);
*/


// USANDO FOR EACH
/*
const textos = ["Edwin","Brandon","Lopez","Martinez","LOME930704HCSPRD02"];
let larga = textos[0].length;
let nombre = textos[0];

textos.forEach(elemento => {
  if(elemento.length > larga) {
    larga = elemento.length;
    nombre = elemento;
  }
});

console.log(larga, nombre);
*/
