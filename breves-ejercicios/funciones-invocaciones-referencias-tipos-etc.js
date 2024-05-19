
console.log("------------------------------------------");
// USANDO UNA FUNCION POR REFERENCIA Y POR INVOCACION
function saludar() {
  console.log("Hola");
}

saludar;
saludar();


// UNA DE MUCHAS FORMAS DE AUTOINVOCACION DE UNA FUNCION
var myApp = (function(){
  var foo = 'Hello World';
  return{
    foo : foo
  }
})();
 
console.log( myApp.foo )
