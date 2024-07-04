let OBJ = {
  nombre: 'Brandon'
};

let STR = 'STR';

let STR1 = '';

console.assert(OBJ.nombre, '1 No existe la propiedad');
console.assert(OBJ?.nombre, '2 No existe la propiedad');

console.assert(OBJ.edad, '3 No existe la propiedad');
console.assert(OBJ?.edad, '4 No existe la propiedad');

console.assert(OBJ.nombre === 'Brandon', '5 No existe la propiedad');
console.assert(OBJ.nombre === 'brandon', '6 No existe el nombre');

console.assert(STR, '7 String vacío');
console.assert(STR1, '8 String vacío');

console.assert('', '9 String vacío');
console.assert('STR', '10 String vacío');
