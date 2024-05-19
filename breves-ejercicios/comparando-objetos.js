
let OBJ1 = {text: 'Do A', finished: true, datos: {nacionalidad:'mexicana'}};
let OBJ2 = {text: 'Do A', finished: true, datos: {nacionalidad:'mexicana'}};

OBJ1 === OBJ2;
JSON.stringify(OBJ1) === JSON.stringify(OBJ2);

OBJ1 !== OBJ2;
JSON.stringify(OBJ1) !== JSON.stringify(OBJ2);

OBJ1 !== OBJ1;

console.log("REASIGNACION");
OBJ2 = OBJ1;
OBJ1 !== OBJ2;


[1,2,3].filter(e => e !== 3);
[1,2,3].filter(e => e === 3);
[1,2,3].filter(e => e === 4);
[1,2,3].filter(e => e !== 4);


let ARRY1 = [{text: 'Do A', finished: true, datos: {nacionalidad:'mexicana'}},{text: 'Do B', finished: true, datos: {nacionalidad:'mexicana'}}];



console.log(ARRY1.filter(e => {
  return e !== e;
}));

console.log(ARRY1.filter(e => {
  return e !== OBJ2;
}));
