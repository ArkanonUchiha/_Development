let saludo1 = 'Hey, ';

function global() {
  let saludo2 = '¿Qué '
  
  function local() {
    let saludo3 = 'tal?';
    
    return saludo1 + saludo2 + saludo3;
  }

  return local;
}



saludo1;
// saludo2; ReferenceError

global();

global()();

// La mejor practica sería guardarla en una variable
let closure = global();

closure();