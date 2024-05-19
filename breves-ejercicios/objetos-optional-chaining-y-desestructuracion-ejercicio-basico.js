let OBJ = {
  nombre:'Diana',
  edad:28,
  atributos: {
    altura: 1.70,
    peso: 75
  },
  nacionalidad: {
    coreana: false
  }
};

function parseOBJ({ nombre, edad, age, atributos, nacionalidad: nationality }) {
  console.log(nombre, typeof nombre);
  console.log(edad, typeof edad);
  console.log(age, typeof age);
  console.log(atributos, typeof atributos);
  console.log(nationality, typeof nationality);
}

parseOBJ(OBJ);

console.log(OBJ?.nacionalidad);
console.log(OBJ?.age);