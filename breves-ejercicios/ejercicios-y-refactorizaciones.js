// EJEMPLO EXTENSO
/*
let texto = "Este es un mensaje de prueba";

texto = texto.toLowerCase();

let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o" || texto[i] === "u") {
    contador++;
  }
}

contador;
*/


// EJEMPLO REFACTORIZADO
/*
const texto = "Este es un mensaje de prueba".toLowerCase();

let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (["a","e","i","o","u"].includes(texto[i])) {
    contador++;
  }
}

contador;
*/


// EJEMPLO REFACTORIZADO
const texto = "Este es un nuevo mensaje de texto".toLowerCase();
let contador = 0;

for (const letra of texto) {
  if (["a","e","i","o","u"].includes(letra)) {
    contador++
  }
}

contador;