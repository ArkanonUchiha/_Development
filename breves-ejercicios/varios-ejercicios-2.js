const OBJ = {
  messageBody: {
    messageText: "¡Hola, Sampaguita!<<br>> Soy Blue.",
    messageType: "OutboundTextMessage"
  }
};

const OBJ2 = '{"messageBody":{"messageText":"¡Hola, Sampaguita!<<br>> Soy Blue.","messageType":"OutboundTextMessage"}}';

JSON.stringify(OBJ);

JSON.parse(OBJ2);


function dameOpcion(opcion) {
  switch (opcion) {
    case 1:
      const mensaje = "Opción 1 seleccionada.";
    case 2:
      const mensaje2 = "Opción 2 seleccionada."; 
    default:
      const mensaje3 = "Opción no reconocida.";
  }

  return mensaje
}

console.log(dameOpcion(1))