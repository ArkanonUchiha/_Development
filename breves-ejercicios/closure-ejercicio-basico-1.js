function inventario(nombre) {
  let _nombre = nombre;
  const _articulos = {};
  
  function agregar(nombre, cantidad) {
    _articulos[nombre] = cantidad;

    console.log(_articulos);
    console.log(_articulos[nombre]);
  }
  
  function borrar(nombre) {
    delete _articulos[nombre];
  }
  
  function cantidad(nombre) {
    return _articulos[nombre];
  }
  
  function nombre() {
    return _nombre;
  }
  
  return {
    agregar,
    borrar,
    cantidad,
    nombre
  };
}

console.log(inventario('libros'));

const libros = inventario("libros");

libros.agregar('React JS', 3);
libros.agregar('JavaScript', 10);
libros.agregar('Node JS', 5);

libros.cantidad('React JS');
libros.cantidad('JavaScript');

libros.borrar('JavaScript');

libros.cantidad('JavaScript');

libros.nombre();
