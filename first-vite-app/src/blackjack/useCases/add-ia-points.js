import { app, pedirCarta, accumulatePoints, comparePoints } from '../utils/imports';
import crearCartaDOM from '../UI/index';

export const addIaPoints = (minPoints) => {
  let iaPoints = 0;

  do {
    const card = pedirCarta();
    const iaTurn = app.playersPoints.length - 1;

    iaPoints = accumulatePoints(card, iaTurn);
    crearCartaDOM(card, iaTurn);
  }
  while ((iaPoints < minPoints) && (minPoints <= 21));

  comparePoints();

  console.log('app.playersPoints - addIaPoints', app.playersPoints);
};
