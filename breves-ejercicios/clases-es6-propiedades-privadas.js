/*
  Las propiedades y métodos privados no existen de forma estricta como estandar en el lenguaje javascript pero se suele utilizar la convención de guión bajo para indicar que una propiedad o método es privado:

    _propiedadPrivada
    _metodoPrivado

  Pero se ha estado trabajando en una solución y aunque no es aceptada de forma global o en todos los navegadores, se tiene que mencionar, y es mediante el uso del símbolo hash #, seguido de un nombre:

  #propiedadPrivada
  #metodoPrivado
*/
class Rectangulo {
  // Aunque esto no funciona todavía en diciembre de 2023
  // #area = 0;
  _area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    
    // this.#area = this.base * this.altura;
    this._area = this.base * this.altura;
  }
}

const rectangulo = new Rectangulo(10, 15);

// Aquí se demuestra que en javascript es fácil cambiar los valores de las propiedades o agregar propiedades desde el exterior de la clase. Esto es inseguro.
// rectangulo.#area = 100;
rectangulo._area = 100;
rectangulo.angulo = 90;

console.log(rectangulo);
