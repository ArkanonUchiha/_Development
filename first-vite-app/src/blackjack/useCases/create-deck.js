import { app } from '../utils/imports';

/**
 * Esta función crea un nuevo deck.
 * @params {Object} app 
 * @params {Array<String>} app.types Ejemplo: ['C', 'D', 'H', 'S']
 * @params {Array<String>} app.specials Ejemplo: ['A', 'J', 'Q', 'K']
 * @params {Array<String>} app.deck Ejemplo []
 * @returns {Array} retorna un nuevo deck de cartas
 */
export const createDeck = () => {
  'use strict';

  app.deck = [];

  if (!app.types || app.types === 0) throw new Error('app.types is mandatory as an array of strings');
  if (!app.specials || app.specials === 0) throw new Error('app.specials is mandatory as an array of strings');

  for (let i = 2; i <= 10; i++) {
    for (let type of app.types) {
      app.deck.push(i + type);
    }
  }

  for (let type of app.types) {
    for (let special of app.specials) {
      app.deck.push(special + type);
    }
  }

  return app._.shuffle(app.deck);
};
