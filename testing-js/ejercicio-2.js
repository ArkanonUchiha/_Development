// assert es un paquete nativo de Node
const assert = require('assert');
const app = require('./app.test.js');

// app.isVowel('Z') ?
//   console.log('Es vocal') :
//   console.log('No es vocal');

// assert forma parte de la API de console. Es algo nativo de JS.
console.assert(app.isVowel('Z'), 'No es vocal');
console.assert(app.isVowel('A'), 'No es vocal');

// Ver el contenido del paquete assert de Node
console.log(assert);
