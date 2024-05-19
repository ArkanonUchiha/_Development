/**
HERENCIA PROTOTIPAL:
ES UN MECANISMO DE JAVASCRIPT QUE PERMITE A LOS OBJETOS HEREDAR PROPIEDADES Y METODOS DE OTROS OBJETOS.

JAVASCRIPT NO MANEJA CLASES COMO EN OTROS LENGUAJES PERO CON LA LLEGADA DE ES6 (2015) SE AGREGÓ UN AZÚCAR SINTÁCTICO QUE PERMITE USAR CLASES PERO REALMENTE, POR DEBAJO, SON PROTOTIPOS. EN JAVASCRIPT LA HERENCIA SE MANEJA A TRAVÉS DE PROTOTIPOS.

EN JAVASCRIPT, CADA OBJETO POSEE UNA PROPIEDAD INTERNA LLAMADA "PROTOTYPE" Y ES UNA REFERENCIA A OTRO OBJETO Y ESTE OBJETO QUE ES REFERENCIADO SE CONOCE COMO "PROTIPO DEL OBJETO".


FUNCIONAMIENTO:
CUANDO SE SOLICITA UNA PROPIEDAD/MÉTODO DE UN OBJETO, JAVASCRIPT HACE LA BÚSQUEDA PRIMERAMENTE EN EL OBJETO Y SI NO LO ENCUENTRA SIGUE LA CADENA DE PROTOTIPOS, BUSCANDO EN CADA PROTOTIPO SUCESIVO HASTA QUE ENCUENTRA LA PROPIEDAD/METODO O LLEGA AL FINAL DE LA CADENA DONDE EL PROTOTIPO ES NULL.
**/

// FUNCION QUE SERVIRÁ COMO "CLASE"
function Vehiculo(marca) {
  this.marca = marca;
}

// SE AGREGA UNA FUNCION A LA CLASE USANDO LA PROPIEDAD PROTOTYPE
Vehiculo.prototype.informacion = function() {
  return `Marca del vehiculo: ${this.marca}`;
};


function Coche(marca, modelo) {
  console.log('SOY THIS DE COCHE', this)
  Vehiculo.call(this, marca);
  this.modelo = modelo;
}

// AQUI SE ESTÁ REALIZANDO LA HERENCIA DE VEHICULO, ES COMO USAR "EXTENDS" DE ES6
Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

Coche.prototype.mostrarModelo = function() {
  return `Modelo del coche: ${this.modelo}`;
};

/*
console.log('1', Vehiculo.prototype);
console.log('2', Object.create(Vehiculo.prototype));
console.log('3', Vehiculo.prototype.constructor);
*/

let miCoche = new Coche('Tesla', 'Model Y');
miCoche.mostrarModelo();
miCoche.informacion();




