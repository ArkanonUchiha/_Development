/**
En JavaScript, bind es un método que se utiliza para crear una nueva función que, cuando se llama, tiene un contexto de objeto específico. Esencialmente, te permite vincular una función a un objeto particular, de modo que cuando la función se ejecute, this dentro de la función apunte al objeto especificado, independientemente de cómo se llame la función.

La sintaxis básica de bind es la siguiente:

    nuevaFuncion = funcion.bind(contexto);

* funcion es la función que deseas vincular a un contexto específico.
* contexto es el objeto al que deseas vincular la función.


EJEMPLO:

    const persona = {
        nombre: 'Juan',
        saludar: function() {
            console.log(`Hola, mi nombre es ${this.nombre}`);
        }
    };

    const saludarJuan = persona.saludar.bind(persona);
    saludarJuan(); // Imprime: Hola, mi nombre es Juan


En este ejemplo, la función saludar se vincula al objeto persona utilizando bind. Esto significa que, cuando saludarJuan se llama posteriormente, this dentro de la función saludar siempre se referirá al objeto persona, sin importar cómo se llame la función.

Además de vincular el contexto, bind también puede usarse para vincular argumentos a una función. Los argumentos vinculados se colocarán al principio de la lista de argumentos cuando se llama a la función vinculada.


EJEMPLO:

    function saludar(mensaje, signo) {
        console.log(`${mensaje}, ${this.nombre}${signo}`);
    }

    const persona = { nombre: 'Juan' };
    const saludarJuan = saludar.bind(persona, 'Hola');
    saludarJuan('!'); // Imprime: Hola, Juan!


En este caso, al vincular la función saludar a persona y pasar 'Hola' como argumento, la función resultante saludarJuan espera solo un argumento adicional (en este caso, !), mientras que 'Hola' ya está vinculado como primer argumento.

**/






const PERSONA = {
  nombre: 'Brandon',
  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
};

PERSONA.saludar();



/*
const PERSONA2 = {
  nombre: 'Brandon',
  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
};

const GREETING2 = PERSONA2.saludar();

GREETING2(); // ESTO DA ERROR DE QUE GREETING2 NO ES UNA FUNCION
*/



const PERSONA3 = {
  nombre: 'Brandon',
  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
};

const GREETING3 = PERSONA3.saludar;

GREETING3();



const PERSONA4 = {
  nombre: 'Brandon',
  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
};

const GREETING4 = PERSONA4.saludar.bind(PERSONA4);

GREETING4();



function myFunc() {
  let name = 'Edwin Brandon';
  console.log(`My función: ${this}, ${this.name}, ${this.nombre}, ${this.saludos}`);
}

const OBJ = {
  nombre: 'EDWIN BRANDON',
  saludos() {
    console.log('Te mando saludos');
  }
};

myFunc();

const myFunc2 = myFunc.bind(OBJ);

myFunc2();

console.log(typeof myFunc2);



function myFunc3() {
  let name = 'Edwin Brandon';
  console.log(`My función: ${this}, ${this.name}, ${this.nombre}, ${this.saludos}`);
  
  this.saludos();
}

const OBJ3 = {
  nombre: 'LOPEZ MARTINEZ',
  saludos() {
    console.log('Te mando saludos');
  }
};

const myFunc4 = myFunc3.bind(OBJ3);

myFunc4();




