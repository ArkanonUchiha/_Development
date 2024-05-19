
const options = [{name:"0001AH0819 • 4152313313214145 • 999729968.30 • MXN • https://s.w320.png • 999729968.30 • true • OPERATIVE • VIGENTE"},{name:"0001AH0819 • 4815160009423640 • 999728763.30 • MXN • https://cardcovers.caasbbva.com/mexico/481516-DY-415231.png.imgcaas.w320.png • Tarjeta digital • true • OPERATIVE • VIGENTE"}];


/*
const options =[{name: "0001AH0819 • 4815160009423640 • 999729968.30 • MXN • https://cardcovers.caasbbva.com/mexico/481516-DY-415231.png.imgcaas.w320.png • Tarjeta digital • true • OPERATIVE • VIGENTE"}];
*/
    const cards = options.map(option => {
      
      // console.log(option.name && option.name.trim().split(/\s*•\s*/));
      
      const [
        alias = '',
        number,
        amount,
        currency = '',
        image = '',
        attribute = '',
        isOn,
        status = '',
        statusDescription = ''
      ] = option.name && option.name.trim().split(/\s*•\s*/);
      return {
        alias,
        number,
        amount: Number(amount),
        currency,
        image,
        attribute,
        isOn: isOn && JSON.parse(isOn),
        status,
        statusDescription
      };
    });

/*
console.log(cards);
*/

const availablePhysicalCards = cards.filter(card => {
  return card.attribute.includes('digital');
});


console.log(availablePhysicalCards);



/*
cards
  .filter(card => true || !availablePhysicalCards.find(availPhysCard => availPhysCard.alias === card.alias))
  .map(option => ({
          ...option,
          cardStatus: 'OPERATIVE',
        }))
*/




