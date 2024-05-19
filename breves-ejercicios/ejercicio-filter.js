const PERSONAS = [
  {
    nombre: "Edwin",
    profesion: "Ingeniero"
  },
  {
    nombre: "Brandon",
    profesion: "Maestro"
  },
  {
    nombre: "Lopez",
    profesion: "Doctor"
  },
  {
    nombre: "Martinez",
    estado: "Soltero"
  },
  {
    nombre: "Diana",
    ciudad: "Mexico"
  }
];

/*
const FILTRADOS = PERSONAS.filter(function(PERSONA) {
  console.log(PERSONA.profesion);
  return PERSONA.profesion;
});

console.log(FILTRADOS);
*/


// LAS FUNCIONES DE FLECHA TIENEN EL RETURN IMPLICITO CUANDO HAY UNA INSTRUCCION EN UNA SOLA LINEA
const FILTRADOS2 = PERSONAS.filter((PERSONA) => PERSONA.profesion);

console.log(FILTRADOS2, FILTRADOS2.length);