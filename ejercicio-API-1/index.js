const API_URL = 'https://jsonplaceholder.typicode.com';
console.log(API_URL);

// PRIMERA FORMA DE CONSUMIR UNA API ANTES DE ES6: USANDO EL OBJETO XMLHTTP REQUEST
// const XHR = new XMLHttpRequest();

// function onRequestHandler() {
//   if (this.readyState === 4 && this.status === 200) {
    /*
      readyState ES UN CODIGO PARA COMPROBAR QUE LA RESPUESTA ESTA LISTA Y EXISTEN 5:
      0 = UNSET, aun no se ha llamado al metodo open
      1 = OPENED, se ha llamado al metodo open
      2 = HEADER_RECEIVED, se está llamando al método send()
      3 = LOADING, está cargando, es decir, está recibiendo la respuesta
      4 = DONE, se ha completado la operación
    */
//     const DATA = JSON.parse(this.response);
//     const HTML_RESPONSE = document.querySelector('#app');

//     const TEMPLATE = DATA.map(user => `<li>${user.name} - ${user.email}</li>`);
//     HTML_RESPONSE.innerHTML = `<ul>${TEMPLATE}</ul>`;
//   }
// }

// XHR.addEventListener('load', onRequestHandler);

/*
  EL METODO OPEN RECIBE 2 PARAMETROS:
  1. EL PRIMERO ES LA PETICION HTTP, POR EJEMPLO "GET" PARA QUE DEVUELVA DATOS EL SERVIDOR.
  2. LA URL DE LA API
*/
// XHR.open('GET', `${API_URL}/users`);
// XHR.send();



// SEGUNDA FORMA DE CONSUMIR UNA API DESPUES DE ES6: USANDO EL METODO FETCH
// const HTML_RESPONSE = document.querySelector('#app');

// FETCH PROPORCIONA EL METODO .json PARA REALIZAR PARSEO DE DATOS
// fetch(`${API_URL}/users`)
//   .then((response) => response.json())
//   .then((users) => {
//     const TEMPLATE = users.map((user) => `<li>${user.name} - ${user.email}</li>`);
//     HTML_RESPONSE.innerHTML = `<ul>${TEMPLATE}</ul>`;
//   });



// ES LO MISMO QUE ARRIBA PERO USANDO NODOS DEL DOM
const HTML_TEMPLATE = document.querySelector('#app');
const CONTAINER = document.createElement('ul');

fetch(`${ API_URL }/users`)
  .then(data => data.json())
  .then(users => {
    users.forEach(user => {
      let elemento = document.createElement('li');
      console.log(elemento);
      elemento.appendChild(document.createTextNode(`${ user.name } - ${ user.email }`));
      CONTAINER.appendChild(elemento);
    });
    HTML_TEMPLATE.appendChild(CONTAINER);
  });
