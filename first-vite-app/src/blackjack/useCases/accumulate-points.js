import { app, valueCard } from '../utils/imports';

export const accumulatePoints = (card, turnPlayer) => {
  console.log('app.playersPoints - accumulatePoints', app.playersPoints);

  app.playersPoints[turnPlayer] = app.playersPoints[turnPlayer] + valueCard(card);
  app.playersSmallQS[turnPlayer].textContent = app.playersPoints[turnPlayer];

  return app.playersPoints[turnPlayer];
};
