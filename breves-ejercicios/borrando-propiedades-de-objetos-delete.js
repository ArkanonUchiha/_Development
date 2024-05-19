const OBJ = {
  nombre: 'Brandon',
  edad: 30,
  juegos: 'Halo'
};

OBJ
delete OBJ.juegos;
delete OBJ.estado;
OBJ


const ARR = ["a","b","c","d"];
delete ARR[2];
ARR
ARR.length
ARR[2]
typeof ARR[2]



const ARR2 = ["a","b","c","d"];
ARR2[2] = undefined;
ARR2


const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(2, 1);
trees
