// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 10: Recorrer un arreglo de cadenas de texto y encontrar la cadena más corta.


// USANDO FOR CLASICO
/*
const textos = ["Edwin","Brandon","Lopez","Martinez","LOME930704HCSPRD02"];
let large = textos[0].length;
let nombre = textos[0];

for(let i = 0; i < textos.length; i++) {
  if(textos[i].length < large) {
    large = textos[i].length
    nombre = textos[i]
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
  if(texto.length < large) {
    large = texto.length;
    nombre = texto;
  }
}

console.log(large, nombre);
*/


// USANDO FOR IN
/*
const textos = ["Edwin","Brandon","Lopez","Martinez","LOME930704HCSPRD02"];
let corta = textos[0].length;
let nombre = textos[0];

for(let texto in textos) {
  if(textos[texto].length < corta) {
    corta = textos[texto].length;
    nombre = textos[texto];
  }
}

console.log(corta, nombre);
*/


// USANDO FOR EACH
/*
const textos = ["Edwin","Brandon","Lopez","Martinez","LOME930704HCSPRD02"];
let corta = textos[0].length;
let nombre = textos[0];

textos.forEach(elemento => {
  if(elemento.length < corta) {
    corta = elemento.length;
    nombre = elemento;
  }
});

console.log(corta, nombre);
*/
