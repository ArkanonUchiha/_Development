function obtenerDatos(valor) {
  let URL = `https://mindicador.cl/api/${valor}`;

  //INVESTIGAR QUE ES ESTA INSTANCIA
  const API = new XMLHttpRequest();

  // QUE PARAMETROS ACEPTA
  API.open('GET', URL, true);

  // QUE SIGNIFICA
  API.send();

  // QUE ES
  API.onreadystatechange = function() {

    // SI LA EVALUACION ES VERDADERA Y EXITOSA
    if(this.status == 200 && this.readyState == 4) {

      // JSON PARA QUE SIRVE
      // PARSE QUE ES Y PARA QUE SIRVE
      let data = JSON.parse(this.responseText);
      let ULresultado = document.getElementById('resultado');
      let i = 0;

      // ESTO DEVUELVE UN OBJETO QUE CONTIENE OTROS OBJETOS(DATOS)
      // console.log(this.responseText);

      // ESTO DEVUELVE EL OBJETO CONVERTIDO A FORMATO JSON
      // console.log(data);

      // ESTO DEVUELVE LA PROPIEDAD "SERIE", QUE ES UN ARRAY DE OBJETOS, DEL OBJETO PRINCIPAL
      // console.log(data.serie);

      // ESTO ES UN STRING VACIO
      ULresultado.innerHTML = '';

      // ITERACION PARA CADA ELEMENTO QUE HAY DENTRO DEL ARRAY DE OBJETOS
      for(let item of data.serie) {

        i++;
        // EL METODO SUBSTRING ES PARA CADENAS DE TEXTO, Y LO QUE HACE ES OBTENER LOS CARACTERES DESDE EL INDICE A HASTA EL INDICE B
        ULresultado.innerHTML += `<li>${item.fecha.substring(0, 10)} | $ ${item.valor}</li>`;

        if(i > 10) {
          break;
        }
      }
    }
  };
}

document.getElementById('dolar').addEventListener('click', function() {
  obtenerDatos('dolar');
});

document.getElementById('uf').addEventListener('click', function() {
  obtenerDatos('uf');
});

