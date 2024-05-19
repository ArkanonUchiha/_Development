/*
  DESESTRUCTURACION DE OBJETOS
  https://www.facebook.com/photo?fbid=10227172154679833&set=pcb.2167004486808173
*/

// ASIGNACION BASICA
const OBJ = {
  nombre: 'Brandon',
  apellido: 'Lopez',
  edad: 28
};

console.log(OBJ.nombre + '-> OBJETO');

const { nombre, apellido, edad } = OBJ;
console.log(nombre, apellido, edad);


// ASIGNACION SEPARADA
const arreglo2 = {
  nombre2: 'Diana',
  apellido2: 'Martinez',
  edad2: 23
};

let nombre2, apellido2, edad2;
({ nombre2, apellido2, edad2 } = arreglo2);

console.log(nombre2, apellido2, edad2);
