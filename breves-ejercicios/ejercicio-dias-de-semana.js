//let hoy = new Date().getDay();
let hoy = 4;

const DAYS_ARR = [
  'DOMINGO',
  'LUNES',
  'MARTES',
  'MIERCOLES',
  'JUEVES',
  'VIERNES',
  'SABADO'
];
console.log(DAYS_ARR[hoy] || 'DIA NO EXISTENTE');


const DAYS_OBJ = {
  0: 'DOMINGO',
  1: 'LUNES',
  2: 'MARTES',
  3: 'MIERCOLES',
  4: 'JUEVES',
  5: 'VIERNES',
  6: 'SABADO'
};
// ESTO DA ERROR PORQUE NO EXISTE UNA PROPIEDAD "hoy" DENTRO DEL OBJETO
console.log(DAYS_OBJ.hoy);

// ESTO FUNCIONA PORQUE SE ACCEDE AL VALOR DE LA VARIABLE
console.log(DAYS_OBJ[hoy] || 'DIA NO EXISTENTE');


const DAYS_ARR_FUNC = [
  () => 'DOMINGO - 0',
  () => 'LUNES - 1',
  () => 'MARTES - 2',
  () => 'MIERCOLES - 3',
  () => 'JUEVES - 4',
  () => 'VIERNES - 5',
  () => 'SABADO - 6'
];
console.log(DAYS_ARR_FUNC[hoy]() || 'DIA NO EXISTENTE');


const DAYS_OBJ_FUNC = {
  0: () => 'DOMINGO - 0',
  1: () => 'LUNES - 1',
  2: () => 'MARTES - 2',
  3: () => 'MIERCOLES - 3',
  4: () => 'JUEVES - 4',
  5: () => 'VIERNES - 5',
  6: () => 'SABADO - 6'
};
console.log(DAYS_OBJ_FUNC[hoy]() || 'DIA NO EXISTENTE');
