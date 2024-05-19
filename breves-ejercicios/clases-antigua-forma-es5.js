const nombre = {
  name: 'Edwin',
  age: 10,
  print() {
    console.log(this);
    console.log(`Name: ${this.name}, Edad: ${this.age}`);
  }
};

const apellido = {
  firstName: 'Brandon',
  age: 20,
  print() {
    console.log(this);
    console.log(`Name: ${this.firstName}, Edad: ${this.age}`);
  }
};

nombre.print();
apellido.print();



// Por convencion, la primera letra en Mayus para indicar que es una clase. Aunque esta es la forma antigua de querer emular una clase, porque con la llegada de ES6 esto ya no es necesario.
function Persona(nombre, edad) {
  console.log('SE EJECUTÓ');
  
  this.nombre = nombre;
  this.edad = edad;
  this.print = function() {
    console.log(`Name: ${this.nombre}, Edad: ${this.edad}`);
  }
}

let jugador1 = Persona('Diana', 25);
console.log(jugador1);

jugador1 = new Persona('Diana', 25);
console.log(jugador1);

jugador1.print();


let jugador2 = new Persona('Ñañara', 25);
jugador2.print();