//const NOMBRE = 'Cards';

const OBJ = [
  {
    name: 'A',
    age: '10',
    cardList: [{num: 1}]
  },
  {
    name: 'B',
    age: '11',
    ListContacts: [{num: 2}]
  },
  {
    name: 'C',
    age: '12',
    ListContacts: [{num: 2}]
  }
];

OBJ.find(msg => msg.ListContacts && msg.name);

//(NOMBRE === 'AccountsOptions' || NOMBRE === 'CardsOptions' || NOMBRE === 'ContactCards') ? 'se encuentra' : 'no se encuentra';


//const OBJ = ['AccountsOptions', 'CardsOptions', 'ContactCards'].includes(NOMBRE);

//console.log(OBJ);
/*
if(['AccountsOptions', 'CardsOptions', 'ContactCards'].includes(NOMBRE) && NOMBRE) {
  console.log('ENTRÓ');
}
*/

/*
const nuevo = OBJ.find(el => el.ListContacts);

    if (nuevo) {
      nuevo.listItemActive = false;
    }

console.log(nuevo);
*/