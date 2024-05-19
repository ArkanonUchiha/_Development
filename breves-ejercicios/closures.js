console.log("                                              ");
console.log("----------------------------------------------");
console.log("COMO INVOCAR FUNCIONES ANIDADAS");
console.log("----------------------------------------------");
console.log("                                              ");

function saveUserData() {
  const user = "Brandon";
  const location = "CDMX";
  
  return function() {
    return {
      user,
      location
    };
  };
}

const user = saveUserData();

console.log(
  saveUserData()()
);

console.log(
  user()
);

console.log("                                              ");
console.log("----------------------------------------------");
console.log("                                              ");

/*
  EN ESTE EJEMPLO LA FUNCION MAS INTERNA ES local, Y ESTA CONOCE EL VALOR DE a, b Y c.
  LA FUNCION global CONOCE EL VALOR DE a PERO NO CONOCE EL VALOR DE c.
  Y FUERA DE LA FUNCION global NO SE CONOCE EL VALOR DE b Y c.

  LAS FUNCIONES INTERNAS PUEDEN TOMAR VALORES QUE SE ENCUENTRAN EN EL EXTERIOR, PERO
  DEL EXTERIOR NO SE PUEDEN TOMAR VALORES QUE SE ENCUENTREN EN EL INTERIOR.
*/

let a = "Me";

function global() {
  const b = " llamo ";

  function local() {
    const c = "Brandon";

    return a + b + c;
  }

  return local;
}

console.log(
  global()()
);

console.log("                                              ");
console.log("----------------------------------------------");
console.log("CLOSURE");
console.log("----------------------------------------------");
console.log("                                              ");

/*
  * UNA CLOSURE ES UNA FUNCION QUE ENCAPSULA LOGICA Y VALORES QUE SOLO PUEDEN SER ACCESIBLES
  DESDE EL EXTERIOR SI SON DEVUELTAS POR MEDIO DEL OPERADOR return.

  * ESTO PERMITE TENER "VARIABLES PRIVADAS", AUNQUE NO SON PRIVADAS EN EL SENTIDO ESTRICTO.

  * ESTA TECNICA SE SOLIA USAR ANTES DE LA LLEGADA DE LAS CLASES EN ES6 DE JAVASCRIPT.

  * UN CLOSURE SE ACERCA BASTANTE A LA DEFINICION DE CLASE DE OTROS LENGUAJES. UN CLOSURE ES
  MUY PARECIDO A UNA CLASE.
*/

/*
  ESTE EJEMPLO ES UN CLOSURE
*/

const miContador = (function() {
  let _contador = 0;

  function incrementar() {
    return _contador++;
  }

  function decrementar() {
    return _contador--;
  }

  function valor() {
    return _contador;
  }


  // ESTO ES LO MISMO QUE LO DE ABAJO
  // return {
  //   incrementar: incrementar,
  //   decrementar: decrementar,
  //   valor: valor
  // }

  return {
    incrementar,
    decrementar,
    valor
  }
})();

console.log(
  miContador
);

console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.valor());
console.log(miContador.decrementar());
console.log(miContador.valor());
