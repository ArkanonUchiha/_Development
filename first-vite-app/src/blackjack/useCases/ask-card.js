import { app } from '../utils/imports';

export const askCard = () => {
  'use strict';

  if (!app.deck.length) {
    throw 'No hay cartas en el deck';
  }

  return app.deck.pop();
};
