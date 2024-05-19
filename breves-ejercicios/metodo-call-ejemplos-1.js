/**
En JavaScript, call es un método que se utiliza para invocar una función con un contexto de objeto específico. Básicamente, te permite llamar a una función como si fuera un método de otro objeto. Esto es útil cuando quieres ejecutar una función en el contexto de un objeto diferente al que originalmente la contiene.

La sintaxis básica de call es la siguiente:

  funcion.call(contexto, arg1, arg2, ...);

* funcion es la función que deseas llamar.
* contexto es el objeto que se utilizará como el contexto de la función. Dentro de la función, this se referirá a este objeto.
* arg1, arg2, etc., son los argumentos que deseas pasar a la función.

**/


function saludar() {
  console.log(`Hola ${this}`);
}

saludar();



function saludar2() {
  console.log(`Hola ${this.nombre}, ${this}`);
}

saludar2();



const persona = {
  nombre: 'Brandon',
  myFunc() {
    console.log(`Hola ${this.nombre}, ${this}`);
  }
};

persona.myFunc();



function saludar3(str) {
  console.log(`Hola ${this.nombre}, ${this}, ${str}`);
}

saludar3.call(persona, 'saludo exterior');

