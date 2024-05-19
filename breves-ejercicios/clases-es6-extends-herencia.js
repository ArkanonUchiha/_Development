/*
  La herencia entre clases en javascript, también conocido como extender una clase.
  Se utiliza la palabra clave 'extends'.
*/
class Persona {
  nombre = 'Sin nombre';
  codigo = 'Sin código';

  constructor(nombre) {
    this.nombre = nombre;
  }
  
  miNombre() {
    console.log('Hola soy ' + this.nombre);
  }
}


// La clase que usa 'extends' significa que está recibiendo la herencia de otra clase. Esto significa que la clase que recibe la herencia se está extendiendo. Esta clase es heredera.
class Heroe extends Persona {
  clan = 'Sin clan';


  // Dentro de una clase heredera no se puede declarar el constructor como si fuese una clase normal, porque daría error...
  // constructor() {}


  // El constructor de la clase heredera está recibiendo un parámetro y éste mismo parámetro se le está pasando al constructor de la clase principal por medio de 'super()'. 
  constructor(nombre) {
    /*
      * ... En lugar de eso se debe de llamar y usar el constructor de la clase principal usando 'super()'.
      * Este método 'super()' hace referencia al constructor de la clase principal. Super es el constructor de la clase principal.
      
      * Una regla de javascript, al tratarse de herencia, dice que 'super()' debe de ir antes de cualquier otra inicialización de propiedades de la clase (Lo que vaya a usar 'this'). 
    */
    
    // Esto dará error porque esta propiedad de la clase (Que usa 'this') se está inicializando antes que super, por lo que debería de moverse de lugar.
    // this.clan = 'Los Avengers';
    
    // Aunque declaraciones de constantes o variables no dan error si se hace antes que 'super()'.
    const NUEVA_CONSTANTE = 'Hola';
    let nuevaVariable = 'Adiós';
    
    super(nombre);
    
    this.clan = 'Los Avengers';
  }


  // Aquí se crea un método exactamente igual al de la clase principal.
  miNombre() {
    console.log('Adiós soy ' + this.nombre);

    // Para poder usar en la clase heredera métodos o propiedades de la clase principal que se llaman exactamente igual, o no (?, se puede hacer por medio del método 'super()' pues este método es el constructor de la clase principal.
    super.miNombre();
  }
}


// Aquí se instancia la clase heredera, que es de tipo Heroe y se le está pasando un parámetro al constructor de la clase heredera.
const instancia = new Heroe('Brandon');

console.log(instancia);

// Aquí se está utilizando un método que pertenece a la clase principal pero que, por medio de la herencia, se usa la instancia de la clase heredera.
console.log(instancia.miNombre());

// Aquí se está utilizando el método de la clase heredera que se llama exactamente igual al de la clase principal. Pareciera que se está sobreescribiendo pero al usar 'super()', dentro de la clase heredera, se puede usar el método de la clase principal.
console.log(instancia.miNombre());

