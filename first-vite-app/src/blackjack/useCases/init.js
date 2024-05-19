import { app, createDeck } from '../utils/imports';

export const init = (numbPlayers = 2) => {
  app.deck = createDeck();

  app.playersPoints = [];

  for (let i = 0; i < numbPlayers; i++) {
    app.playersPoints.push(0);
  }

  app.playersSmallQS.forEach(el => el.textContent = '');

  app.cardsContainerQS.forEach(el => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }

    // el.innerHTML = '';
  });

  app.askCardQS.disabled = false;
  app.newMatchQS.disabled = true;

  console.clear();
  console.log('app.playersPoints - init', app.playersPoints);
};
