function prueba(a) {
  console.log(a, typeof a);
  console.log(!a, typeof !a);
  console.log(!!a, typeof !!a);
  
  if (!a) {
    console.log("hola");
    return;
  }
  
  console.log("FUERA DE IF");
}


prueba({
    messageBody: {
    integrationMessageData: 'isNative'
  },
  messageType: 'string'
});


/*
prueba(undefined);
*/

/*
function test(saludo) {
  if(typeof saludo !== 'string') {
    console.log(saludo);
    return;
  }
  console.log(saludo, 'fuera de if');
}

test("hola");
*/

/*
const fruits = ['manzana','pera','uva','guayaba'];
const [ fruits1, fruits2 ] = fruits;
console.log(fruits1, fruits2);



const fruta = ['manzana','pera','uva','guayaba'];
const { fruta1, fruta2 } = fruta;
console.log(fruta1, fruta2);
*/