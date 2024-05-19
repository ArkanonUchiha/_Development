/*
agentOption
serviceFlagOption
contactsFlagOption
quickPillOption
cardsOptions
AccountsOptions
ratingsFlag
confirmation
*/



const payload = {
    name: "contactsFlagOption"
};



/*
const payload = undefined;
*/


const moduleType = {
  cardsOptions: 'tarjetas',
  AccountsOptions: 'cuentas',
  contactsFlagOption: 'contactos',
  transfersOptions: 'transferir',
  faqsOptions: 'faqs'
};


const moduleName = ((payload || '').name || '');



const messageType = moduleName.replace(/^./, match => match.toUpperCase());



console.log(moduleName, typeof moduleName);



console.log( moduleName.toLowerCase().includes('options') || moduleName.toLowerCase().includes('option') );



if (moduleType[moduleName]) {
  console.log('SOY moduleType[moduleName]', moduleType[moduleName]);
}



console.log(moduleType[moduleName]);



console.log('', messageType);


