// Types of functions in javascript: Generator function
function* generadora() {
  for (let i = 1; i <= 5; i++) {
    console.log('DENTRO DE FOR, ANTES DE YIELD');
    yield i;
    console.log('DENTRO DE FOR, DESPUES DE YIELD');
  }
  console.log('FUERA DE FOR');
}

const iterator = generadora();

iterator.next();
iterator.next().value === 2 ? 'SOY TRUE' : 'FALSO';
