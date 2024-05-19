// EJERCICIO DE PROACTIVIDAD

// AGREGAR ELEMENTOS A UN CONTENEDOR
// let button = document.querySelector(".button");
// let contador = 0;

// button.addEventListener("click", () => {
//   let contenedor = document.getElementById("container");
//   let elemento = document.createElement("div");
//   let texto = document.createTextNode(contador + 1);

//   elemento.setAttribute("class", "item");
//   elemento.appendChild(texto);
//   contenedor.appendChild(elemento);
//   contador++;
//   // // contenedor.scrollTop = contenedor.scrollHeight;
//   contenedor.scrollTo({
//     top: contenedor.scrollHeight,
//     behavior: "smooth"
//   });
// });


// VARIANTE CON FUNCION SEPARADA
// let button = document.querySelector(".button");
// let contador = 0;

// button.addEventListener("click", crearElemento);

// function crearElemento() {
//   let contenedor = document.getElementById("container");
//   let nodo = document.createElement("div");
//   let texto = document.createTextNode(contador + 1);

//   nodo.setAttribute("class", "item");
//   nodo.appendChild(texto);
//   contenedor.appendChild(nodo);
//   contador++;
//   // contenedor.scrollTop = contenedor.scrollHeight;
//   contenedor.scrollTo({
//     top: contenedor.scrollHeight,
//     behavior: "smooth"
//   });
// }


// EJERCICIO DE PROACTIVIDAD
const MIDDLE_CONTAINER = document.getElementById('middle-container');
const FIRST_LIST = document.getElementById('first-list');
const SECOND_LIST = document.getElementById('second-list');

MIDDLE_CONTAINER.addEventListener('click', () => {
  SECOND_LIST.appendChild(FIRST_LIST.firstElementChild);
});


// Dame ejercicios de manipulación del DOM con javascript pero no me des la solución



// EJERCICIO 1: Agrega un nuevo elemento al final de una lista existente.

// PRIMERA FORMA
// const contenedor = document.getElementById("container");
// console.log(contenedor.innerHTML += "<div class='item'>4</div><div class='item'>5</div>");


// SEGUNDA FORMA
// const contenedor = document.getElementById("container");
// let node = document.createElement("div");
// let texto = document.createTextNode("4");

// node.setAttribute("class", "item");
// node.appendChild(texto);
// contenedor.appendChild(node);


// TERCERA FORMA (CREANDO UNA FUNCION PERSONALIZADA)
// const container = document.getElementById("container");
// const newItem = createNewItem("div", "item", "4");

// container.appendChild(newItem);

// function createNewItem(tag, className, text) {
//   const newItem = document.createElement(tag);
//   newItem.setAttribute("class", className);
//   newItem.appendChild(document.createTextNode(text));
//   return newItem;
// }



// EJERCICIO 3: Cambia el estilo de un elemento existente.
// EJERCICIO 4: Elimina un elemento existente.
// EJERCICIO 5: Crea un nuevo elemento y agrega el mismo como un elemento hijo de otro existente.
// EJERCICIO 6: Agrega un controlador de eventos a un elemento existente.

const BUTTON = document.getElementById('button');
const CONTAINER = document.getElementById('container');
const FOOTER = document.getElementById('footer');


// EJERCICIO 6
BUTTON.addEventListener('click', (e) => {

  // EJERCICIO 3
  // e.target.toggleAttribute('primary');
  // e.target.classList.toggle('primary');
  BUTTON.toggleAttribute('primary');
  BUTTON.classList.toggle('primary');


  // EJERCICIO 4
  const ELIMINADO = document.body.removeChild(FOOTER);
  console.log('Elemento eliminado', ELIMINADO);

  // EJERCICIO 5
  CONTAINER.appendChild(document.createElement('input'));
});


// OTRO EJERCICIO 6: Agrega un controlador de eventos a un elemento existente.
const INPUT = document.getElementById('input');

INPUT.addEventListener('change', (e) => {
  console.log(e.target.value);
});
