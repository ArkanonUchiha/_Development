const OBJ = {
  nombre: 'Brandon',
  edad: 30,
  juegos: 'Halo'
};

console.log(OBJ);

delete OBJ.juegos;
delete OBJ.estado;

console.log(OBJ);


const ARR = ["a", "b", "c", "d"];
delete ARR[2];

console.log(ARR);
console.log(ARR.length);
console.log(ARR[2]);
console.log(typeof ARR[2]);



const ARR2 = ["a", "b", "c", "d"];
ARR2[2] = undefined

console.log(ARR2);


const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(2, 1);

console.log(trees);
