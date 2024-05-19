const INDIVIDUO = {
  nombre: "Jhon",
  numero: 117,
  imprimir: function() {
    
    let self = this;
    
    console.log(self);

    setTimeout(function() {
      console.log(self.nombre, self.numero);
    }, 1000);
  }
};

INDIVIDUO.imprimir();

