let isTank = false;
const ARR = [
  'Brand',
  'Swain',
  isTank ? 'Leona' : 'Zyra'
];

console.log(ARR);


let nota = 90;

nota >= 95 ? 'A+' :
nota >= 90 ? 'A'  :
nota >= 85 ? 'B+' :
nota >= 80 ? 'B'  :
nota >= 75 ? 'C+' :
nota >= 70 ? 'C'  : 'F';