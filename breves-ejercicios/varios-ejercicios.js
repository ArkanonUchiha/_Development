/*
const APP = document.getElementById('app');

APP.addEventListener('click', function(){
  APP.dispatchEvent(new CustomEvent('soy-evento', {
    detail:{nombre: 'Brandon', edad: 29}
  }));
});

APP.addEventListener('soy-evento', function(e) {
  console.log(e.detail);
});

APP.click();
*/

// OUTPUT: {nombre: 'Brandon', edad: 29}
// CREAR EL ELEMENTO HTML INDICADO Y PROBAR



// REGEX PARA QUITAR LA PALABRA "DE"
/*
'28 de febrero de 2017, 16:41 h'.replace(/(\d{2})\sde\s(\w+)\sde\s(\d{4})/, (match, ...pn) => {
  console.log(match);
  console.log(...pn);
  console.log(pn);
  
  return pn.slice(0, 3).join(' ')
});
*/

/*
'28 de febrero de 2017, 16:41 h'.replace(/(\d{2})\sde\s(\w+)\sde\s(\d{4})/, (match, ...pn) => pn.slice(0, 3).join(' '));
*/

/*
'28 de febrero de 2017, 16:41 h'.replace(/de /g, '');
*/

/*
new Date('28 febrero 2017').toLocaleDateString('en', {
  day:'2-digit',
  month: 'long',
  year: 'numeric',
});
*/

/*
let optionsPanel =  [{ tag: 'more-options' }];

function removeOption(tag) {
    console.log('TAG', typeof tag, tag);
    optionsPanel = optionsPanel.filter(item => item.tag !== tag);
  console.log(optionsPanel);
}

removeOption('more-options');
*/


const fields = [
  {
    "options": [
      {
        "disabled": false,
        "hidden": false,
        "name": "Saldo",
        "selected": false,
        "value": "Saldo"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Transferir",
        "selected": false,
        "value": "Transferir"
      },
      {
        "disabled": false,
        "hidden": false,
        "name": "Movimientos",
        "selected": false,
        "value": "Movimientos"
      },
    ]
  },
  {
    "name": "Brandon"
  }
];

if (fields[0] && fields[0].options.length) {
  // this._showOptions(fields[0].options);
  console.log("IF");
}