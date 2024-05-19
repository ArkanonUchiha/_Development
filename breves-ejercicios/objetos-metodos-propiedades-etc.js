console.log("------------------------------------------");
/*
// PRIMER EJEMPLO: USANDO for in
const OBJECT = {
    nombre: "Brandon",
    apellido: "Martinez",
    edad: 29,
    nacionalidad: "mexicana",
    estado: "soltero",
    hijos: false
};

for(propiedad in OBJECT) {
    console.log(typeof propiedad, propiedad);
    console.log(`KEY: ${propiedad}, VALOR: ${OBJECT.propiedad}`);
    console.log(`KEY: ${propiedad}, VALOR: ${OBJECT[propiedad]}`); 
}
*/

/*
// SEGUNDO EJEMPLO: USANDO for in Y hasOwnProperty
const PERSONA = function() {
  this.nombre = "Alexios";
  this.ciudad = "Cefalonia";
  this.pais = "Grecia";
};

PERSONA.prototype.edad = 30;

let brandon = new PERSONA();

for(propiedad in brandon) {
  console.log(brandon.hasOwnProperty(propiedad));
  
  if(brandon.hasOwnProperty(propiedad)) {
    continue;
  }
  console.log(propiedad, brandon[propiedad]);
}
*/

/*
// TERCER EJEMPLO: USANDO for in Y hasOwnProperty
const PERSONA2 = function() {
  this.nombre = "Alexios";
  this.ciudad = "Cefalonia";
  this.pais = "Grecia";
};

PERSONA2.prototype.edad = 30;

let brandon2 = new PERSONA2();

for(propiedad in brandon2) {
  console.log(brandon2.hasOwnProperty(propiedad));
  
  if(!brandon2.hasOwnProperty(propiedad)) {
    continue;
  }
  console.log(propiedad, brandon2[propiedad]);
}
*/
/*
// CONVIRTIENDO OBJETOS JS A JSON Y VICEVERSA
let objetoJS = {
  nombre: "Brandon",
  edad: "29",
  saludar: function() {
    console.log("Hola");
  }
};

JSON.stringify(objetoJS);

JSON.stringify([function(){}]);

JSON.stringify([objetoJS]);

JSON.stringify(objetoJS, null, '\t');


let objetoJSON = '{"nombre": "Brandon","edad": "29"}';

JSON.parse(objetoJSON);
*/