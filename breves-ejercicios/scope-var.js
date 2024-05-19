var nombre = 'Brandon';

function saludo() {
  console.log(nombre);

  var nombre = 'Edwin',
      edad = 30;

  console.log(nombre);
  
  return {nombre, edad};
}

console.log(nombre);

var edad = 20;

saludo();


console.log(nombre, edad);

