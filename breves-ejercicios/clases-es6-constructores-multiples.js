/*
  * De forma estricta, Javascript no acepta múltiples constructores pero hay formas en que se puede lograr.
  
  * JavaScript no tiene una sintaxis directa para definir múltiples constructores en una clase como lo harías en algunos otros lenguajes de programación. Sin embargo, puedes simular comportamientos similares utilizando parámetros opcionales o argumentos con valores predeterminados en el constructor.
  
  * En Javascript solo se puede tener un constructor de la clase. No se pueden tener varios como en otros lenguajes de programación
*/
class Persona {
  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }


  // Lo ideal sería que hubiese un constructor preparado para cada tipo de argumento que reciba pero en javascript solo se puede tener 1 constructor, por lo que la línea de abajo daría error.
  // constructor(obj) {}

  getInfo() {
    console.log(`INFO: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}


const nombre1 = 'Brandon',
      apellido1 = 'Lopez',
      pais1 = 'Mexico';

const nombre2 = {
  nombre: 'Diana',
  apellido: 'Rosendo',
  pais: 'Mexico'
};


// Aquí se está haciendo una instancia de la clase y se le están enviando directamente al constructor ciertos parámetros.
const persona1 = new Persona(nombre1, apellido1, pais1);

// Esta es otra instancia de la clase y se le están enviando las propiedades de un objeto como parámetros al constructor, pero esta mal porque se está haciendo una nueva instancia y se pueden hacer n cantidad de instancias y ese es el problema.
const persona2 = new Persona(nombre2.nombre, nombre2.apellido, nombre2.pais);


persona1.getInfo();
persona2.getInfo();





class Persona2 {
  /*
    Para poder simular la sobrecarga de constructores, en javascript se puede hacer el siguiente tip:
    
    - Crear un método estático que sirva para crear y devolver una nueva instancia de la clase pero usando el constructor y éste método estático recibiendo un parámetro diferente.
    - Se pueden crear los métodos necesarios que sirvan como sobrecarga de constructores. Haciendo las adecuaciones correctas.
  */
  // Por medio de desestructuración en los parámetros se obtendran los valores
  static forObj({nombre, apellido, pais}) {
    return new Persona2(nombre, apellido, pais);
  }
  
  
  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`INFO: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}


const nombre11 = 'Brandon',
      apellido11 = 'Lopez',
      pais11 = 'Mexico';

const nombre22 = {
  nombre: 'Diana',
  apellido: 'Rosendo',
  pais: 'Mexico'
};


// Aquí se está haciendo una instancia de la clase y se le están enviando directamente al constructor ciertos parámetros.
const persona11 = new Persona2(nombre11, apellido11, pais11);

// Esta no es otra instancia de la clase, porque no se está usando la palabra 'new', se está usando el método estático que se preparó para recibir un objeto y, dentro de éste se devuelve la instancia de la clase.
const persona22 = Persona2.forObj(nombre22);


persona11.getInfo();
persona22.getInfo();

