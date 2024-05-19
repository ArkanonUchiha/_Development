console.log("------------------------------------------");
// INCREMENTO Y DECREMENTO EN CICLO FOR
/*
for (let j = 10; j >= 0; j-- ) {
  console.log(j);
}

for (let j = 10; j >= 0; j-=2 ) {
  console.log(j);
}

for (let j = 0; j <= 10; j++ ) {
  console.log(j);
}

for (let j = 0; j <= 10; j+=2 ) {
  console.log(j);
}

for (let j = 0; j <= 10; j+=3 ) {
  console.log(j);
}
*/
/*
console.log("------------------------------------------");
// USO DE LAS PALABRAS RESERVADAS: break Y continue

// EJEMPLO CON WHILE
var i = 1;

while(i < 10) {
      i++;
  
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// EJEMPLO CON FOR
for (let j = 0; j <= 10; j++ ) {
  if(j === 5) {
    continue;
  }
  console.log(j);
}

// EJEMPLO CON WHILE
var i = 1;

while(i < 10) {
      i++;
  
  if (i === 5) {
    break;
  }
  console.log(i);
}

// EJEMPLO CON FOR
for (let j = 0; j <= 10; j++ ) {
  if(j === 5) {
    break;
  }

  console.log(j);
}
*/

console.log("------------------------------------------");
//ROTULANDO CICLOS
/*
for_cicloPrincipal:
for(let A = 1; A <= 5; A++) {
  console.log("A: ", A);
  
  for_cicloSecundario:
  for(let B = 1; B <= 5; B++) {
    console.log("B: ", B);
    
    for(let C = 1; C <= 5; C++) {
      console.log("C: ", C);
      
      break for_cicloPrincipal;
    }
  }
}
*/

for_cicloPrincipal:
for(let A = 1; A <= 5; A++) {
  console.log("A: ", A);
  
  for_cicloSecundario:
  for(let B = 1; B <= 5; B++) {
    console.log("B: ", B);
    
    for(let C = 1; C <= 5; C++) {
      console.log("C: ", C);
      
      break for_cicloSecundario;
    }
  }
}


