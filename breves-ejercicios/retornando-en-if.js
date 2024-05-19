function prueba(a) {
  if(a) {
    console.log('DENTRO DEL IF');
    return;
  }
  console.log('DESPUÉS DEL IF');
}

prueba(1);


function prueba2(a) {
  if(a) {
    console.log('DENTRO DEL IF');
  }
  console.log('DESPUÉS DEL IF');
}

prueba2(1);