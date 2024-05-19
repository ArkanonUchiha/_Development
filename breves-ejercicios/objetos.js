// PROBANDO LA FUNCION FREEZE PARA OBJETOS Y ARREGLOS
let obj2 = {
  campeon: "Brand",
  tipo: "Mago"
};

let objetoCongelado = Object.freeze(obj2);
let comprobar = objetoCongelado.tipo = "adc";

console.log(obj2);

let obj = {
  nombre: "brandon",
  edad: 28,
  ciudad: "CDMX",
  datos: {
    trabajo: "web",
    estado: "compromiso"
  }
};

console.log(obj.nombre ? "VERDADERO" : "FALSO");
console.log(obj.estatura ? "VERDADERO" : "FALSO");
