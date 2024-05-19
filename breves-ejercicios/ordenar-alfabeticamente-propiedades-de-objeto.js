let obj = {
  'local-3': 'Mensaje 3',
  'local-2': 'Mensaje 2',
  'local-4': 'Mensaje 4',
  'local-1': 'Mensaje 1',
};

let ordenadas = Object.keys(obj).sort();
let newObj = {};

console.log(ordenadas);



ordenadas.forEach(key => {
  console.log(key);
  console.log(newObj[key]);
  console.log(obj[key]);
  
   return newObj[key] = obj[key];
});

  console.log(newObj);