import { app } from '../utils/imports';

const createCardDOM = (card, turnPlayer) => {
  const cardElement = document.createElement('img');
  cardElement.src = `../assets/cartas/${card}.png`;
  cardElement.classList.add('cards');

  app.cardsContainerQS[turnPlayer].appendChild(cardElement);
};

export const disableButtons = (ev) => {
  app.newMatchQS.disabled = false;
  app.askCardQS.disabled = true;
  ev.target.disabled = true;
};

export default createCardDOM;
