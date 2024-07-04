// let assertNODE = require('assert'); // Este modulo es propia de NODE, no de MOCHA

// CHAI es una librería de afirmaciones (asserts y demás) para NODE y el navegador. En este caso se usa la interfaz ASSERT de CHAI, no de NODE.
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;
chai.should();


// it('#indexOf()', function () {
//   it('should return -1 when the value is not present', function () {
//     assertNODE.equal([1, 2, 3].indexOf(4), -1);
//   });
// });



// NUMBERS
it('Verifica que el resultado de la operación sea un número:', () => {
  const value = 2 + 2;

  expect(value).to.be.a('number');
  assert.typeOf(value, 'number');
});



// STRINGS
it('Verifica que el valor proporcionado es una cadena de texto:', () => {
  const value = 'Hola Mundo';

  expect(value).to.be.a('string');
  assert.typeOf(value, 'string');
});


// BOOLEANS
it('Verifica que el valor proporcionado es un booleano:', () => {
  const value = true;

  expect(value).to.be.a('boolean');
  assert.typeOf(value, 'boolean');
});



// ARRAYS
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

it('Verifica que el valor proporcionado es un array con una longitud determinada:', () => {
  expect(shoppingList).to.be.an('array');
  expect(shoppingList).to.have.lengthOf(5);

  assert.typeOf(shoppingList, 'array');
  assert.lengthOf(shoppingList, 5);
});



// OBJECTS
const data = {
  country: 'MX',
  state: 'CDMX',
  number: 110
};

it('Verifica que el valor proporcionado es un objeto con propiedades determinadas:', () => {
  expect(data).to.be.an('object');
  expect(data).to.have.own.property('state');
  expect(data).to.have.property('state');


  assert.typeOf(data, 'object');
  assert.property(data, 'state');
  assert.include(data, { state: 'CDMX' }, 'object contains property');
});



// FUNCTIONS
let palindrome = word => word.split('').reverse().join('');

it('Verifica que el valor proporcionado es una función y retorna un valor determinado:', () => {
  expect(palindrome).to.be.a('function');
  assert.typeOf(palindrome, 'function');

  expect(palindrome('hola')).to.equal('aloh');
  assert.equal(palindrome('hola'), 'aloh');
});



// PROMISES: Para promesas la misma librería aconseja usar la dependencia de CHAI AS PROMISED
let palindrome2 = word => {
  return new Promise((resolve, reject) => {
    if (!word) reject('La palabra está vacía');

    let reverseWord = word.split('').reverse('').join('');
    resolve(reverseWord);
  });
};

it('should - Verificar que hola es igual a aloh:', () => {
  return palindrome2('hola').should.eventually.equal("aloh");
});

it('assert - Verificar que hola es igual a aloh:', () => {
  return assert.eventually.equal(palindrome2('hola'), 'aloh', "This had better be true, eventually");
});

it('should - async/await - Verificar que hola es igual a aloh', async () => {
  (await palindrome2('hola')).should.equal('aloh')
  await Promise.reject(new Error()).should.be.rejectedWith(Error);
});

it('assert - async/await - Verificar que hola es igual a aloh', async () => {
  assert.equal(await palindrome2('hola'), 'aloh')
  await Promise.reject(new Error()).should.be.rejectedWith(Error);
});

