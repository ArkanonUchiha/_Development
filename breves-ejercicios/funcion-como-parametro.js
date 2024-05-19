function buenosDias(nombre) {
  return "Buenos dias " + nombre;
}

function saludar(nombre, func) {
  return func(nombre);
}

saludar("Brandon", buenosDias);