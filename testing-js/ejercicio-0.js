// assert es un paquete nativo de Node
const assert = require('assert');
const app = require('./ejercicio-0test.js');

console.info('--> Método ok() <--');
try {
  assert.ok(app.isVowel('A'));
  assert.ok(app.isVowel('E'));
  assert.ok(app.isVowel('Z'));
} catch (error) {
  console.error(error.message);
}

console.info('--> Método equal() <--');
try {
  assert.equal(app.isVowel('A'), true);
  assert.equal(app.isVowel('B'), false);
  assert.equal(app.isVowel('A'), false);
  assert.equal(app.isVowel('B'), true);
} catch (error) {
  console.error(error.message);
}


// try {
//   assert.ok(app.isVowel('A'));
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   assert.ok(app.isVowel('B'));
// } catch (error) {
//   console.error(error.message);
// }


// console.info('Método equal()');

// try {
//   assert.equal(app.isVowel('B'), false);
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   assert.equal(app.isVowel('A'), false);
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   assert.equal(app.isVowel('B'), true);
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   assert.equal(app.isVowel('A'), true);
// } catch (error) {
//   console.error(error.message);
// }
