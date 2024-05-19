const OBJ = [{
  nombre: 'Brandon'
},
{
  nombre: 'Diana',
  apellido: 'Rosendo'
},
{
  apellido: 'Lopez'
}];

console.log(OBJ.find(el => el.nombre === 'Alexios'));
console.log(OBJ.find(el => el.nombre === 'Brandon'));
console.log(OBJ.find(el => el.nombr === 'Brandon'));
console.log(OBJ.find(el => el.nombre));
console.log(OBJ.find(el => el.apellido));