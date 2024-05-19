const BUTTON = document.getElementById('button');
const BODY = document.body;
const ROOT = document.querySelector(':root');
const ROOT_STYLE = getComputedStyle(ROOT).getPropertyValue('--varTest3');


console.log('ESTO ES ROOT:', ROOT);
console.log('ESTO ES EL TIPO DE ROOT:', typeof ROOT.childNodes, ROOT.childNodes);
console.log('ESTO ES EL VALOR DE LA CP:', ROOT_STYLE);


BUTTON.addEventListener('click', () => {
  BODY.toggleAttribute('dark');
  ROOT.style.setProperty('--varTest3', 'yellow');
});


