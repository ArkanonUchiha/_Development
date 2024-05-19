// EJERCICIOS USANDO FOR Y SUS VARIANTES
// EJERCICIO 7: Dado un arreglo de números, encuentra el promedio de todos los números en el arreglo.


const ARREGLO = [87,94,100,81,98];
let promedio = 0;

// USANDO FOR CLASICO
/*
for(let i = 0; i < ARREGLO.length; i++) {
  promedio += ARREGLO[i];
}
promedio /= ARREGLO.length;
console.log(promedio);
*/


// USANDO FOR OF
/*
for(let calificacion of ARREGLO) {
  promedio += calificacion;
}
promedio /= ARREGLO.length;
console.log(promedio);
*/


// USANDO FOR IN
/*
for(let calificacion in ARREGLO) {
  promedio += ARREGLO[calificacion];
}
promedio /= ARREGLO.length;
console.log(promedio);
*/


// USANDO FOR EACH
/*
ARREGLO.forEach(calificacion => {
  promedio += calificacion;
});
promedio /= ARREGLO.length;
console.log(promedio);
*/
