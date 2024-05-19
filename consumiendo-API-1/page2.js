let URL = 'https://jsonplaceholder.typicode.com/posts/';

$(document).ready(function() {
  $.ajax({
    // ESTE METODO HTTP "GET" ES PARA OBTENER DATOS
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/",
    dataType: "json",

    // FUNCION QUE SE EJECUTA CUANDO SE HAN CONSEGUIDO EXITOSAMENTE LOS DATOS
    success: function(data) {
      
      // HACE UNA ITERACION POR CADA ELEMENTO QUE HAYA
      $.each(data, function(i, item) {
        let row = `
        <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.body}</td>
        </tr>
        `;

        $('#table>tbody').append(row);
      });
    }
  });
});
