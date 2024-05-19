/**
Object.create es un método en JavaScript que se utiliza para crear un nuevo objeto, utilizando un objeto existente como prototipo de ese nuevo objeto. Esto significa que el nuevo objeto heredará las propiedades y métodos del objeto prototipo.

La sintaxis básica de Object.create es la siguiente:

Object.create(prototipo, propiedadesOpcionales)

* prototipo es el objeto que se utilizará como prototipo del nuevo objeto.
* propiedadesOpcionales es un objeto opcional que especifica las propiedades adicionales que se agregarán al nuevo objeto, con sus valores y configuraciones.

**/

const ANIMAL = {
  tipo: 'Desconocido',
  sonido() {
    console.log('Hace un sonido desconocido');
  },
  props: {
    prop1: 'prop1',
    prop2: 'prop2'
  }
};
console.log(ANIMAL);
console.log(typeof ANIMAL, ANIMAL.tipo);



const PERRO = Object.create(ANIMAL);
console.log(PERRO, typeof PERRO, PERRO.tipo);
console.log(PERRO.__proto__, PERRO.__proto__.tipo);
console.log(PERRO.prototype);



PERRO.tipo = 'Perro';
PERRO.raza = 'Labrador';
PERRO.sonido();


console.log(PERRO, typeof PERRO, PERRO.tipo);
console.log(PERRO.__proto__, PERRO.__proto__.tipo);
console.log(PERRO.prototype);




const OBJ1 = {
  tipo: 'Desconocido',
  sonido() {
    console.log('Hace un sonido desconocido');
  },
  props: {
    prop1: 'prop1',
    prop2: 'prop2'
  }
};

const OBJ2 = {
  ...OBJ1,
  tipo: 'Perro',
  raza: 'Labrador'
};

console.log(OBJ2);



/**
¿Es mejor usar Object.create o el operador spread?


La elección entre Object.create y el operador de propagación (spread operator, ...) depende del contexto y de lo que necesites hacer en tu código. Ambos tienen sus propias ventajas y casos de uso específicos:

1. Object.create:

* Herencia de prototipos: Object.create es útil cuando necesitas crear un objeto que herede directamente de otro objeto. Esto puede ser útil si deseas establecer una cadena de prototipos específica.

* Clonación de objetos con prototipos personalizados: Si necesitas crear un nuevo objeto con propiedades personalizadas y un prototipo específico, Object.create te permite hacerlo de manera directa y explícita.

*Control sobre el prototipo: Object.create te da un mayor control sobre el prototipo del objeto resultante.


2. Operador de propagación (spread operator, ...):

* Clonación superficial: El operador de propagación (...) es útil cuando necesitas realizar una clonación superficial de un objeto. Copia las propiedades enumerables de un objeto a otro objeto nuevo, pero no clona el prototipo.

* Sintaxis más concisa: El uso del operador de propagación puede ser más conciso y legible, especialmente para copiar las propiedades de un objeto a otro.

* Uso común en ES6: Dado que el operador de propagación es una característica estándar de ECMAScript 6 (ES6), es ampliamente utilizado y puede ser más familiar para otros desarrolladores que lean tu código.


En resumen, si necesitas crear un objeto con un prototipo específico y controlar la herencia de prototipos, Object.create es la opción adecuada. Por otro lado, si solo necesitas realizar una clonación superficial de un objeto sin preocuparte por el prototipo, el operador de propagación (spread operator, ...) es más conveniente y simple de usar.


**/



