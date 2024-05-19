  function sumar(a, b) {
    console.log(this);
    if (this._validarEntradas(a, b)) {
      return a + b;
    } else {
      return 'Error: Las entradas no son válidas';
    }
  }

  function _validarEntradas(a, b) {
    return typeof a === 'number' && typeof b === 'number';
  }

sumar('5',5);
sumar(5,5);