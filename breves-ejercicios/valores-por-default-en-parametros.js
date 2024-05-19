const obj = {
  saludo: undefined,
  atributos: undefined,
  masculino: false
};


function message(obj) {
  console.log(obj);
  const { saludo = '', atributos = {}, masculino = true } = obj;
  
  console.log(saludo, atributos, masculino);
}



message(obj);

