// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 4: Recorrer un arreglo de objetos y mostrar solo el valor de una propiedad en particular.


// USANDO FOR CLASICO
/*
const arreglo = [
  { nombre:"Brandon", apellido:"Lopez", edad:29 },
  { nombre:"Jonathan", apellido:"Lopez", edad:27 },
  { nombre:"Quetzalia", apellido:"Lopez", edad:22 }
];

for(let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i].nombre);
}
*/


// USANDO FOR OF
/*
const arreglo = [
  { nombre:"Brandon", apellido:"Lopez", edad:29 },
  { nombre:"Jonathan", apellido:"Lopez", edad:27 },
  { nombre:"Quetzalia", apellido:"Lopez", edad:22 }
];

for(let valor of arreglo) {
  console.log(valor.nombre);
}
*/


// USANDO FOR IN
/*
const arreglos = [
  { nombre:"Brandon", apellido:"Lopez", edad:29 },
  { nombre:"Jonathan", apellido:"Lopez", edad:27 },
  { nombre:"Quetzalia", apellido:"Lopez", edad:22 }
];
for(let valor in arreglos) {
  console.log(arreglos[valor].nombre);
}
*/


// USANDO FOR EACH
/*
const arreglo = [
  { nombre:"Brandon", apellido:"Lopez", edad:29 },
  { nombre:"Jonathan", apellido:"Lopez", edad:27 },
  { nombre:"Quetzalia", apellido:"Lopez", edad:22 }
];
arreglo.forEach(elemento => {
  console.log(elemento.nombre);
});
*/
