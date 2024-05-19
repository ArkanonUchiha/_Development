let ARRY1 = [
  {text: 'Do A', finished: true, datos: {nacionalidad:'mexicana'}},
  {text: 'Do A', finished: true, datos: {nacionalidad:'mexicana'}},
  {text: 'Do B', finished: true, datos: {nacionalidad:'mexicana'}},
  {text: 'Do C', finished: true, datos: {nacionalidad:'mexicana'}},
  {text: 'Do D', finished: true, datos: {nacionalidad:'mexicana'}}
];

ARRY1[0] === ARRY1[1];
ARRY1[0] === ARRY1[0];

ARRY1[0] !== ARRY1[1];
ARRY1[0] !== ARRY1[0];

ARRY1.map(el => {
  if(el !== ARRY1[1]) {
    console.log("DENTRO DE IF", el);
    return el;
  }
  
  console.log("FUERA DE IF", ARRY1[1]);
  return { ...ARRY1[1], finished: false };
});
