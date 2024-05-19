console.log("                                              ");
console.log("----------------------------------------------");
console.log("OPERADOR OR - ||");
console.log("----------------------------------------------");
console.log("                                              ");

/*
  CORTOCIRCUITO OR - CUANDO EL VALOR DE LA IZQUIERDA EN LA EXPRESION
  SEA TRUE O TRUTHY, ES EL VALOR QUE SE CARGARÁ POR DEFECTO.
*/

function saludar(nombre) {
  console.log(`Me llamo ${nombre}`);
}

saludar("Edwin");
saludar();


function saludar2(nombre) {
  nombre = nombre || "Unknowed";

  console.log(`Me llamo ${nombre}`);
}

saludar2("Brandon");
saludar2();


function saludar3(nombre = "Desconocido") {
  console.log(`Me llamo ${nombre}`);
}

saludar3("Lopez");
saludar3();

console.log("VALORES TRUTHY");
console.log({} || "DERECHA");
console.log([] || "DERECHA");

console.log("VALORES FALSY");
console.log(undefined || "DERECHA");
console.log(null || "DERECHA");
console.log(0 || "DERECHA");
console.log("" || "DERECHA");

console.log("                                              ");
console.log("----------------------------------------------");
console.log("OPERADOR AND - &&");
console.log("----------------------------------------------");
console.log("                                              ");

/*
  CORTOCIRCUITO AND - CUANDO EL VALOR DE LA IZQUIERDA EN LA EXPRESION
  SEA FALSE O FALSY, ES EL VALOR QUE SE CARGARÁ POR DEFECTO.
*/

let obj = {
  nombre: "brandon",
  edad: 28,
  ciudad: "CDMX",
  datos: {
    trabajo: "web",
    estado: "compromiso"
  }
};

let filterData = (obj || {}) && (obj.nombre || {}) && (obj.datos || {});
let filterData2 = (obj || {}) && (obj.nombre || {});

console.log(filterData);
console.log(filterData2);

console.log("VALORES TRUTHY");
console.log({} && "DERECHA");
console.log([] && "DERECHA");

console.log("VALORES FALSY");
console.log(undefined && "DERECHA");
console.log(null && "DERECHA");
console.log(0 && "DERECHA");
console.log("" && "DERECHA");
