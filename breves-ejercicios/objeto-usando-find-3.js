let ARR = [{nombre:'brandon', edad:30}, {nombre:'Diana', edad:28}];
let NUEVO = [];
let EMPTY = undefined;

NUEVO = [...ARR];
NUEVO = [...NUEVO];
NUEVO = [...ARR];


if(ARR && EMPTY && NUEVO) {
  console.log('SE HA IMPRESO');
} else {
  console.log('NO SE IMPRIME');
}


!ARR.find(el => el.nombre === 'brando');
!ARR.find(el => el.nombre === 'brandon');


let optionsPanel = [{ tag: 'card-on' }, { tag: 'more-options' }];


optionsPanel = [
  ...optionsPanel,
  { tag: 'more-options' },
];


if(NUEVO.length) {
  console.log('TENGO CONTENIDO');
}