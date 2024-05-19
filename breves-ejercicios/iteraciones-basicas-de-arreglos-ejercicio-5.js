// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 5: Recorrer un arreglo de objetos y mostrar solo los objetos que cumplen cierta condición.


// USANDO FOR CLASICO
/*
const arreglo = [
  { nombre:"Brandon", apellido:"Lopez", edad:29 },
  { name:"Jonathan", apellido:"Lopez", edad:27 },
  { nmbre:"Quetzalia", apellido:"Lopez", edad:22 },
  { nombre:"Diana", apellido:"Martinez", edad:25 }
];

for(let i = 0; i < arreglo.length; i++) {
  if(arreglo[i].nombre) {
    console.log(arreglo[i]);
  }
}
*/


// USANDO FOR OF
/*
const arreglo = [
  { nombre:"Brandon", apellido:"Lopez", edad:29 },
  { name:"Jonathan", apellido:"Lopez", edad:27 },
  { nmbre:"Quetzalia", apellido:"Lopez", edad:22 },
  { nombre:"Diana", apellido:"Martinez", edad:25 }
];

for(let objeto of arreglo) {
  if(objeto.nombre) {
    console.log(objeto);
  }
}
*/


//USANDO FOR IN
/*
const arreglo = [
  { nombre:"Brandon", apellido:"Lopez", edad:29 },
  { name:"Jonathan", apellido:"Lopez", edad:27 },
  { nmbre:"Quetzalia", apellido:"Lopez", edad:22 },
  { nombre:"Diana", apellido:"Martinez", edad:25 }
];

for(let nombre in arreglo) {
  if(arreglo[nombre].nombre) {
    console.log(arreglo[nombre]);
  }
}
*/


// USANDO FOR EACH
/*
const arreglo = [
  { nombre:"Brandon", apellido:"Lopez", edad:29 },
  { name:"Jonathan", apellido:"Lopez", edad:27 },
  { nmbre:"Quetzalia", apellido:"Lopez", edad:22 },
  { nombre:"Diana", apellido:"Martinez", edad:25 }
];
arreglo.forEach(elemento => {
  if(elemento.nombre) {
    console.log(elemento);
  }
});
*/
