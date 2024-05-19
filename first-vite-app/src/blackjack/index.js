import {
  addIaPoints,
  addPlayerPoints,
  createDeck,
  init,
  app,
  disableButtons
} from './utils/imports';

const myModule = (() => {
  'use strict';

  const newMatch = () => {
    init();
  };


  // TODO: Crear un manager de eventos
  app.newMatchQS.addEventListener('click', () => {
    newMatch();
  });

  app.askCardQS.addEventListener('click', () => {
    addPlayerPoints();
  });

  app.stopMatchQS.addEventListener('click', (ev) => {
    disableButtons(ev);
    addIaPoints(app.playersPoints[0]);
  });

  return {
    app,
    crearDeck: createDeck,
    init,
    puntosJugadores: app.playersPoints
  };
})();
