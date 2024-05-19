/*
  Por buenas practicas, el orden de una clase debe de ser así:
  1. Métodos y propiedades estáticas.
  2. Propiedades de la clase,
  3. Método constructor.
  4. Métodos set's y get's.
  5. Métodos.
  6. Todo lo que es privado al final de la clase (Algunos desarrolladores así lo hacen).
*/



class Persona {
  /*
  * El constructor es un método que se ejecuta en cuanto se crea una instancia de la clase.
  * Cuando se termina de ejecutar el constructor entonces es cuando se regresa la instancia de la clase (La instancia dentro de la clase es 'this')
  * El constructor es el único método que retorna una instancia de un objeto y no devuelve undefined como sí lo hace una función normal.
  */
  constructor() {
    console.log('Hola');

    // Ni aunque se le fuerce o especifique a retornar undefined
    return undefined;
  }
}

// Aquí se crea una instancia de la clase Persona
const brandon = new Persona();
console.log(brandon);





class Persona1 {
  /*
    Por defecto, todas las clases en javascript tienen implementado el modo estricto o 'use strict'. No es necesario implementarlo.
  */
  //'use strict'


  /*
    Las características que tendrá la clase se llaman propiedades y, para separarlas se usa punto y coma, y no coma como si se tratase de un objeto o variables.
    Esta es la parte de la inicializacion de propiedades de clase, no de inicialización de variables.
  */
  nombre = '';
  codigo = '';
  frase = '';
  
  constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
    // Esto dará 'nombre is not defined' porque el modo estricto está activado. Además de que 'nombre' no existe en el scope dentro del constructor. Se debe de hacer uso de 'this' para hacer referencia a la propiedad requerida.
    // nombre = '';
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}

const spiderMan = new Persona1('Peter', 'Spiderman', 'Soy Spiderman');
const capitanAmerica = new Persona1('Steve', 'Capitán', 'Soy el Capitán América');
console.log(spiderMan, capitanAmerica);
console.log('SOY TYPEOF DE spiderMan y capitanAmerica', typeof spiderMan, typeof capitanAmerica);





/*
  * Los métodos de una clase no son mas que funciones que se ejecutan dentro de la instancia de la clase.
  * Los métodos de una clase se suelen crear después del constructor y no llevan la palabra 'function'.
  * Los métodos de una clase devuelven undefined a menos que se especifique qué cosa debe de retornar.
  * Los métodos de una clase se pueden llamar entre sí pero se debe de utilizar 'this' para hacer referencia a ellos. Si no se hace así entonces dará error de undefined.
*/
class Persona2 {
  constructor() {

  }
  
  saludar() {
    console.log('Hola, saludos desde el método saludar');
  }
  
  publico() {
    // Esto dará undefined
    // saludar();
    this.saludar();
    return 'Soy el método saludar';
  }
}


const brandon2 = new Persona2();
console.log(brandon2);

// Aqui se está imprimiendo la referencia al método de la clase.
console.log(brandon2.publico);
// Aquí se está ejecutando el método de la clase.
console.log(brandon2.publico());





/*
  Los métodos set y get en una clase de JavaScript están relacionados con las propiedades de esa clase.
  
  Método set (Establecen/Asignan valor): Este método se utiliza para asignar un valor a una propiedad de la clase. Cuando creas una instancia de la clase y luego asignas un valor a esa propiedad, el método set se activa. Esto te permite realizar validaciones o acciones adicionales antes de establecer el valor.
  
  Método get (Obtener/Conseguir valor): Este método se utiliza para obtener el valor de una propiedad de la clase. Al acceder a la propiedad, el método get se ejecuta, permitiéndote realizar acciones adicionales antes de devolver el valor.
*/
class Persona3 {
  constructor() {
    this._comida = '';
  }
  
  /*
    Por buenas practicas, los métodos set y get suelen colocarse después del constructor.
    
    * Estos métodos comienzan con la palabra reservada set o get.
    * Algunos programadores nombran a los setter's o getter's empezando con el tipo de método seguido del nombre que quieran.
    * El nombre de los métodos set no puede ser igual al nombre de la propiedad a la que se le quiere asignar el valor porque esto crearía un bucle infinito. Aunque algunos nombran estos métodos en base al nombre de la propiedad privada que están estableciendo pero sin el guión bajo.
    * Realmente no crea un bucle infinito porque las clases de Javascript tienen por defecto un método de protección.
    * El método set normalmente suele recibir un solo parámetro, aunque puede recibir más pero no es lo correcto, relacionado a la propiedad a la que quiere asignarle valor.
    Para poder usar éstos métodos se hace de forma diferente a un método normal.
    * 
  */
  set setComida(comida) {
    this._comida = comida.toUpperCase();
  }
}

const brandon3 = new Persona3();

// Aquí se establece el valor de la propiedad por medio del método set creado para ella. Se utiliza como si fuese una propiedad de un objeto común, sin paréntesis porque no es un método sino es una propiedad de la clase.
brandon3.setComida = 'mole';

console.log(brandon3);

// Aquí se demuestra un problema al agregar una nueva propiedad a la clase desde el exterior y sobreescribir el valor de una propiedad existente.
brandon3.propiedadIntrusa = 'Soy intruso';
brandon3.setComida = 'No soy comida';

console.log(brandon3);





class Persona4 {
  constructor() {
    this._comida = '';
  }

  set setComida(comida) {
    this._comida = comida.toUpperCase();
  }
  
  /*
    Por buena practica, es recomendable que un get siempre devuelva algo.
    * El método get normalmente suele recibir un solo parámetro, aunque puede recibir más pero no es lo correcto, relacionado a la propiedad que devolverá.
  */
  get getComida() {
    return `Mi comida favorita: ${this._comida}`;
  }
}

const brandon4 = new Persona4();
brandon4.setComida = 'Duraznos';

console.log(brandon4);

// Aquí se obtiene el valor de la propiedad por medio del método get creado para ella. Se utiliza como si fuese una propiedad de un objeto común, sin paréntesis porque no es un método sino es una propiedad de la clase.
console.log(brandon4.getComida);





class Persona5 {
  /*
    * Las propiedades y métodos estáticos se pueden usar SIN NECESIDAD DE INSTANCIAR LA CLASE en la que se encuentran.
    * Por buenas practicas, muchos desarrolladores suelen colocar en primer lugar todo lo estático dentro de su clase.
  */
  static _conteo = 0;


  /*
    * También se pueden crear métodos get's estáticos.
    * Al hacer estático un método get nos permite poder utilizar el método como si fuese una propiedad de clase dentro de la propia clase sin necesidad de instanciar la clase.
  */
  static get conteo() {
    return Persona5._conteo + ' instancias.'
  }
  
  
  /*
    * También se pueden crear métodos normales pero estáticos.
    * Unas cosas a tomar en cuenta:
      - No se puede hacer referencia (o sea, usar this) a las propiedades de la clase porque darían undefined. El undefined se debe a que no se está instanciando la clase.
  */
  static mensaje() {
    console.log('Valor de nombre: ', this.nombre);
  }

  
  constructor() {
    this.nombre = '';
    
    console.log('DESDE Persona5: ', typeof Persona5, Persona5, typeof Persona5.conteo, typeof Persona5._conteo);

    // Aquí se hacen uso de la propiedad estática, del getter estático y del método estático dentro de la misma clase y no se usa 'this' para hacer referencia sino el nombre de la clase.
    console.log(Persona5._conteo++);
    console.log(Persona5.conteo);
    console.log(Persona5.mensaje());
  }
}


const brandon5 = new Persona5();
brandon5;

// Se ha usado la propiedad estática sin necesidad de instanciar pero esta no es la forma correcta de usar
// Persona5._conteo = 100;
console.log('CONTADOR:', Persona5._conteo);
console.log('CONTADOR:', brandon5._conteo);

// Aquí se utiliza directamente la clase y, como si fuese una propiedad, se usa el método get estático.
console.log('Persona5.conteo: ', Persona5.conteo);
console.log('brandon5.conteo: ', brandon5.conteo);

// Aquí se utiliza directamente el método estático.
console.log('Persona5.mensaje(): ', Persona5.mensaje());
console.log('brandon5.mensaje(): ', brandon5.mensaje());
