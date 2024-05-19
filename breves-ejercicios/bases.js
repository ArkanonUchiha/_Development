console.log(
  46545646545646546546545646545646546n + 10n,
  typeof {},
  typeof [],
  typeof null,
  typeof 46545646545646546546545646545646546n + 10n,
  typeof Array, // ESTO IMPRIME 'function' PORQUE HACE REFERENCIA AL PROTOTIPO, QUE ES UNA FUNCTION
  typeof function a() { }
);


let NUM = 5;

console.log(NUM <= 5 || NUM == 9 ? 'aceptable' : 'rechazado');
