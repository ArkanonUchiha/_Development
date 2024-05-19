// Types of functions in javascript: Higher-order function
function operaciones(a, b, operacion) {
  return operacion(a, b);
}

const sumaNum = (a, b) => a + b;
const restaNum = (a, b) => a - b;

operaciones(5, 5, sumaNum);
operaciones(10, 6, restaNum);



// Types of functions in javascript: Generator function
/*
  - Una función generadora lleva un asterisco inmediatamente después de la palabra function.
  - son funciones de las que se puede salir y volver a entrar. Su contexto (asociación de variables) será conservado entre las reentradas.
  - Este tipo de funciones devuelven un objeto Generator.
  - La palabra clave yield se usa para pausar y reaunudar una función generadora.
  
  - NOTA: Es mejor ejecutar esta funcion en navegador para no enredarse en los resultados de las invocaciones.
*/
function* countToFive() {
  for(let i = 1; i <= 5; i++) {
    let recuperado = yield i;
    console.log('VALOR DEL CONTADOR', i);
    console.log('VALOR DE RECUPERADO: ', recuperado);
  }
  console.log('Después del for', recuperado);
}

const iterator = countToFive();
iterator;
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
