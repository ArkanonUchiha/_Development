let a = 1;

a !== 1 ? funcion1() : (() => {
  funcion2();
  funcion3();
})();


function funcion1() {
  console.log("HOLA SOY FUNCION 1");
}

function funcion2() {
  console.log("HOLA SOY FUNCION 2");
}

function funcion3() {
  console.log("HOLA SOY FUNCION 3");
}
