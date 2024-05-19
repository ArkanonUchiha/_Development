var arr = [1, 2, 3];

console.log(arr);

arr = [...arr, 4, 5, 6];

console.log(arr);

arr = [...arr, ...[7, 8, 9], ...arr]

console.log(arr);




let OBJ = {
  nombre: 'Brandon',
  edad: 30
};

let nombre = "ALEXIOS";

OBJ = {...OBJ, estatura: 1.70}
OBJ = {...OBJ, nacionalidad: 'Mexicana'}
OBJ = {...OBJ, nombre: 'Edwin'}
OBJ = {...OBJ, nombre: 'Edwin', nacionalidad: 'Griega'}
OBJ = {...OBJ, nombre }


let OBJ2 = {
  hobbie: 'Jugar',
  nacimiento: '04/07/93'
};

OBJ = {...OBJ, ...OBJ2};
OBJ = {...OBJ2, ...OBJ};


let CHAIN = 'Brandon';

[...CHAIN];