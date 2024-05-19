// console.log('Hola Mundo');

// -------------------------------------

// const SALUDAR = (name) => {
//   return `Saludos, ${name}`;
// };

// console.log(SALUDAR('Brandon'));

// -------------------------------------

/*
console.log('INICIO');

setTimeout(() => {
  console.log('PRIMER TIMEOUT');
}, 3000);

setTimeout(() => {
  console.log('SEGUNDO TIMEOUT');
}, 0);

setTimeout(() => {
  console.log('TERCER TIMEOUT');
}, 0);

console.log('FINAL');
*/

// -------------------------------------

/*
const HTML = `
  <h1>Hola mundo - JS</h1>
`,
  OBJ = {
    name: 'Alexios',
    myFunc() {
      return `Mi nombre es ${this.name}`;
    },
    newArr: [1, 2, 3]
  },
  ARR = [
    'Ahri',
    'Alistar',
    'Annie'
  ],
  { name: newName, myFunc, newArr, newObj = {} } = OBJ,
  [champ1, , champ3] = ARR;



console.log(HTML, OBJ, OBJ.name, OBJ.myFunc());
console.log(newName, myFunc(), newArr, newObj);
console.log(champ1, champ3);
*/

// -------------------------------------

const getUserById = (id, callback) => {
  const user = {
    id,
    nombre: 'Brandon'
  };

  setTimeout(() => {
    callback(user);
  }, 1500);
};

getUserById(10, (usuario) => {
  console.log(usuario, usuario.nombre);
});
