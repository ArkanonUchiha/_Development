const saludar = (nombre) => {
  return `Hola, ${nombre}`;
}

// saludar('Brandon');


// typeof []
// typeof {}

/*
Array.isArray([]);
Array.isArray({});
Array.isArray('Hola');
*/

// "HOLA".length;


//"A"
//"HOLA".includes('LA').indexOf('LA')

// ['a', 'b', 'c'].indexOf('z');

// new RegExp("h", "i").test("HOLA");

// new RegExp('^[a-zA-Z0-9]*$').test("l4-");
/^[a-zA-Z0-9\s]*$/.exec('Buenos días');
(/^[a-zA-Z0-9\s]*$/).exec('Buenos dias');
"¿Qué pasó?".replace(/[^a-zA-Z0-9\sáéíóúÁÉÍÓÚ]/g, '');





// ' _INIT '.trim().toLowerCase()

// [1,2,3,'A','B'][3]