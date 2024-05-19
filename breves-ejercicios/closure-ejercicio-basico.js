const miContador = (function () {
  let _contador = 0;
  
  function incrementar() {
    return _contador++;
  }
  
  function decrementar() {
    return _contador--;
  }
  
  function valor() {
    return _contador;
  }
  
  return {
    incrementar,
    decrementar,
    value: valor
  };
})();


miContador.value();
miContador.incrementar();
miContador.incrementar();
miContador.value();
miContador.decrementar();
miContador.value();