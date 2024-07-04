// NUMBERS
test('toBe: Verifica que la suma de 2 + 2 es 4:', () => {
  expect(2 + 2).toBe(4);
});

// test('Verifica que la suma de 2 + 2 es 4:', () => {
//   expect(2 + 2).toBe(1);
// });

test('toEqual: Verifica que la suma de 2 + 2 es 4:', () => {
  expect(2 + 2).toEqual(4);
});

test('Verifica que la suma de 2 + 2 es 4:', () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});


// STRINGS
test('there is no I in team', () => {
  expect('team').not.toMatch(/Z/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('They are equal strings', () => {
  expect('Hello').toEqual('Hello');
});

test('They are unequal  strings', () => {
  expect('Hello').not.toEqual('Goodbye');
});


// BOOLEANS
test('Truthy', () => {
  const flag = true;
  expect(flag).toBe(true);
  expect({}).toBeTruthy();
  expect(1).toBeTruthy();
  expect('A').toBeTruthy();
  expect('').not.toBeTruthy();
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});


// OBJECTS ITERABLES
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});


// FUNCTIONS
let palindrome = word => word.split('').reverse().join('');

test('Verificar que hola es igual a aloh', () => {
  expect(palindrome('hola')).toBe('aloh');
});


// PROMISES
let palindrome2 = word => {
  return new Promise((resolve, reject) => {
    if (!word) reject('La palabra está vacía');

    let reverseWord = word.split('').reverse('').join('');
    resolve(reverseWord);
  });
};

test('Verificar que hola es igual a aloh - Promise', () => {
  return palindrome2('hola')
    .then(str => {
      expect(str).toBe('aloh');
    });
});

test('Verificar que hola es igual a aloh - Async Await', async () => {
  let response = await palindrome2('hola');

  expect(response).toBe('aloh');
});
