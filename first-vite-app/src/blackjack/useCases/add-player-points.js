import { app, pedirCarta, accumulatePoints, addIaPoints } from '../utils/imports';
import crearCartaDOM from '../UI/index';

export const addPlayerPoints = () => {
  app.stopMatchQS.disabled = false;

  const card = pedirCarta();
  const playerPoints = accumulatePoints(card, 0);

  crearCartaDOM(card, 0);

  if (playerPoints > 21) {
    app.newMatchQS.disabled = false;
    app.askCardQS.disabled = true;
    app.stopMatchQS.disabled = true;
    addIaPoints(playerPoints);
  }
  else if (playerPoints === 21) {
    app.newMatchQS.disabled = false;
    app.askCardQS.disabled = true;
    app.stopMatchQS.disabled = true;
    addIaPoints(playerPoints);
  }
};
