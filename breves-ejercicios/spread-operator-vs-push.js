// EXPLORANDO EL SPREED OPERATOR
function myFunction(v, w, x, y, z, a, b, c, d, e) {
  console.log(v, typeof v);
  console.log(w, typeof w);
  console.log(x, typeof x);
  console.log(y, typeof y);
  console.log(z, typeof z);
  console.log(a, typeof a);
  console.log(b, typeof b);
  console.log(c, typeof c);
  console.log(d, typeof d);
  console.log(e, typeof e);
}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[10, 20], ...'hola');

/* */

const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];

console.log('Soy parts:', parts);
console.log('lyrics:', lyrics);

const PARTS = ['shoulders', 'knees'];
PARTS.push('head', 'and', 'toes');
console.log('PARTS:', PARTS);

/* */

var arr = [1, 2, 3];
var arr2 = [...arr, 4, 5, 6];

console.log(arr);
console.log(arr2);

arr === arr2

arr2.push(4);

console.log(arr);
console.log(arr2);

/* */

var arr = [1, 2, 3];
var arr2 = [arr, 4, 5, 6];

console.log(arr);
console.log(arr2);

arr === arr2

arr2.push(4);

console.log(arr);
console.log(arr2);


/* */

const ARR = [2,4,6,8,10];

function suma(...arguments) {
  console.log(arguments, ...arguments, typeof arguments, Array.isArray(arguments));
  
  const elem = arguments;
  
  console.log(elem);
  
  let sum = 0;
  
  arguments.map(numero => {
    console.log(numero);
    return sum += numero;
  });
  
  console.log(sum);
}

suma(...ARR);


let NUEVO = [{nombre:'brandon'}];
NUEVO = [...NUEVO, {nombre: 'Diana'}];

let NUEVO2 = {nombre:'brandon'};
NUEVO2 = {...NUEVO2, status:{activado: true}};



