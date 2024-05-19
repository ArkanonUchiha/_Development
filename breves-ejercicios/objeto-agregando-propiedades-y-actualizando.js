let ARR = [
  {
    nombre:'Diana', edad:28
  },
  {
    atributos: {
      altura: 1.70,
      peso: 75
    }
  },
  {
    nombre:'brandon',
    edad:30
  }
];
let NUEVO = [];

ARR.length ? 'TENGO CONTENIDO' : 'NO TENGO CONTENIDO';
NUEVO.length ? 'TENGO CONTENIDO' : 'NO TENGO CONTENIDO';

//ARR = [...ARR];
ARR[2] = { ...ARR[2], edad:32, nacionalidad: 'mexicana' };
ARR

/*
NUEVO = [...NUEVO];
NUEVO = [...NUEVO, {nombre:'brandon', edad:30}];
*/