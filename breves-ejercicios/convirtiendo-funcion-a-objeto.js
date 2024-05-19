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


function ANIMAL2() {
  console.log('HOLA');
}


console.log(ANIMAL2, typeof ANIMAL2);


// const PERRO = Object.create(ANIMAL.prototype);
const PERRO = Object.create(ANIMAL2.prototype);
PERRO.raza = 'Labrador';

console.log(PERRO, typeof PERRO);


PERRO.__proto__.constructor;
PERRO.constructor;
PERRO.constructor();