/*
  singleton en JavaScript ES UN PATRÓN DE DISEÑO que se utiliza para asegurarse de que una clase tenga una única instancia y proporcionar un punto de acceso global a esa instancia. Básicamente, evita la creación de múltiples instancias de una clase y garantiza que solo haya una instancia disponible en todo el programa.

  Puedes implementar un singleton de varias maneras en JavaScript, pero una forma común es a través de una función constructora que devuelve la instancia única si ya ha sido creada, o la crea y la devuelve si aún no existe.
*/


/*
  - Un singleton es una instancia única y global de la clase.
  - Siempre retornará una única y sola instancia, sin importar cuántas instancias se hagan de la clase en el exterior.
  - Es útil cuando se quiere compartir la misma información en una aplicación.
  - Es útil en bases de datos.
*/
class Singleton {
  /*
    Para reconocer el patrón singleton se pueden observar 2 cosas:
    1. Una propiedad estática que comunmente es llamada instancia o instance. Sirve para inicializar la instancia de la clase.
    2. Las propiedades o métodos que se quieren mantener de uso global.
  */
  static instancia;
  nombre = '';
  
  constructor(nombre = '') {
    // Esto devolverá undefined porque no existe una instancia de la clase. La propiedad estática todavía no tiene valor.
    console.log(Singleton.instancia);
  }
}

/*
  Siguiendo la idea del patrón de diseño singleton, al usar una propiedad estática que sirva como inicialización de la instancia de la clase, cuando no existe una instancia entonces devuelve undefined.
*/
const instancia1 = new Singleton('Brandon');





class Singleton2 {
  static instancia;
  nombre = '';

  constructor(nombre = '') {
    // this está haciendo referencia a la instancia de la clase en la que se encuentra (Singleton2)
    Singleton2.instancia = this;
    this.nombre = nombre;


    // Esto ya no devolverá undefined porque arriba a la propiedad estática se le está asignando como valor la instancia de la clase, siendo 'this' el valor.
    console.log(Singleton2.instancia);


    // Es opcional que se especifique que el constructor deba devolver una instancia de la misma clase al enviarle this, porque un constructor devuelve por default la instancia de la clase. Pero la idea del singleton es que en el constructor se devuelva la instancia de la clase.
    return this;
  }
}

// Aquí, desde el exterior, se está haciendo una instancia de la clase
const instancia2 = new Singleton2('Brandon');
console.log(`Nombre en la instancia 2 es: ${instancia2.nombre}`);

// Pero, ¿Qué pasa si se hace otra o varias instancias de la clase? Sin una validación entonces no tendría sentido singleton porque no se estaría usando una unica instancia
const instancia22 = new Singleton2('Lopez');
console.log(`Nombre en la instancia 2 es: ${instancia22.nombre}`);





class Singleton3 {
  static instancia;
  nombre = '';

  constructor(nombre = '') {
    /*
      Esta validación sirve para saber si existe o no la instancia de la clase:
      
      Si existe, entonces devuelve la instancia existente...
    */
    if(!!Singleton3.instancia) {
      return Singleton3.instancia;
    }


    // Pero si no existe entonces la crea y la devuelve en el return explicito de abajo (o implicito)
    Singleton3.instancia = this;
    this.nombre = nombre;


    console.log(Singleton3.instancia);

    return this;
  }
}

// Aquí, desde el exterior, se están haciendo varias instancias de la clase...
const instancia3 = new Singleton3('Brandon');
console.log(`Nombre en la instancia 3 es: ${instancia3.nombre}`);

// ...Apesar de que se hagan otras instancias de la clase, siempre devolvera una sola
const instancia33 = new Singleton3('Lopez');
console.log(`Nombre en la instancia 3 es: ${instancia33.nombre}`);

const instancia333 = new Singleton3('Martinez');
console.log(`Nombre en la instancia 3 es: ${instancia333.nombre}`);




