
const obj = {
  name: 'brandon',
  age: 29
};

function pruebaOBJ({name, age}) {
  console.log(name, age)
  return name = {
    apellidos: 'Martinez'
  };
}

pruebaOBJ(obj);



const arr = [5,10,15];

function pruebaARR([a,b,c,d]) {
  console.log(a,b,c,d);
}

pruebaARR(arr);


console.table({obj});