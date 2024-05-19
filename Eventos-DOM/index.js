const addDateBtn = document.getElementById('addDateBtn');
const addDateDiv = document.getElementById('addDateDiv');

const innerdDate = document.getElementById('innerdDate');
var paragraphs = document.getElementsByClassName('paragraph');
const formContainer = document.getElementById('formContainer');
const ULcontainer = document.getElementById('ULcontainer');

console.log(paragraphs);
console.log(formContainer);
console.log(ULcontainer);


// PRIMERA FORMA
// function functionAddDate() {
//   addDateBtn.addEventListener('click', function() {
//     innerdDate.innerHTML=Date();
//     console.log(addDateBtn); // Por qué se imprimen varios console al dar un solo clic?
//   });
// }

// SEGUNDA FORMA
// function functionAddDate() {
//   addDate.addEventListener('click', () => {
//     this.innerHTML=Date(); // Esta linea no se ejecuta porque es una arrow function, y el valor de this es otro
//     console.log(addDate);
//   });
// }


// TERCERA FORMA
function functionAddDate() {
  innerdDate.innerHTML=Date();
  this.style.backgroundColor = "red";
}

addDateBtn.addEventListener('click', functionAddDate); // Se invoca la funcion sin los parentesis  para que pueda ser ejecutada
addDateDiv.addEventListener('copy', functionAddDate); // Se invoca la funcion sin los parentesis  para que pueda ser ejecutada
