console.log(Array.isArray([1]));
console.log(Array.isArray(1));

console.log(Array.isArray([1]) ? 'SOY UN ARREGLO' : 'SOY OTRA COSA');
console.log(Array.isArray(1) ? 'SOY UN ARREGLO' : 'SOY OTRA COSA');


const nombre = parseInt('-1');
const nombre2 = parseInt('1');
const nombre3 = parseInt('Hola');
const nombre4 = parseInt('true');
console.log(nombre, typeof nombre);
console.log(nombre2, typeof nombre2);
console.log(nombre3, typeof nombre3);
console.log(nombre4, typeof nombre4);


const NOMBRE = JSON.parse('1');
const NOMBRE2 = JSON.parse('true');
console.log(NOMBRE, typeof NOMBRE);
console.log(NOMBRE2, typeof NOMBRE2);