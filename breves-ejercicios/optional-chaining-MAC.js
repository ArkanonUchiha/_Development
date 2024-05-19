const OBJ = {
  nombre: 'Brandon',
  hobbies: {
    jugar: true,
    beber: false,
  }
};

console.log(OBJ?.apellido);
console.log(OBJ?.nombre);
console.log(OBJ?.hobbies?.jugar);
console.log(OBJ?.hobbies?.bailar);