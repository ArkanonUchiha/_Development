const myModule = (() => {
  'use strict';

  /*
    2C = TWO OF CLUBS
    2D = TWO OF DIAMONDS
    2H = TWO OF HEARTS
    2S = TWO OF SPADES
  */

  const newMatchQS    = document.querySelector('#newMatch'),
    askCardQS         = document.querySelector('#askCard'),
    stopMatchQS       = document.querySelector('#stopMatch'),
    playersSmallQS    = document.querySelectorAll('small'),
    cardsContainerQS  = document.querySelectorAll('.cards-container');

  let deck           = [],
    playersPoints    = [];

  const types       = ['C', 'D', 'H', 'S'],
    specials        = ['A', 'J', 'Q', 'K'];

  const app = {
    newMatchQS,
    askCardQS,
    stopMatchQS,
    playersSmallQS,
    cardsContainerQS
  };


  const init = (numbPlayers = 2) => {
    deck = createDeck();

    playersPoints = [];

    for (let i = 0; i < numbPlayers; i++) {
      playersPoints.push(0);
    }

    app.playersSmallQS.forEach(el => el.textContent = '');

    app.cardsContainerQS.forEach(el => {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }

      // el.innerHTML = '';
    });

    app.askCardQS.disabled   = false;

    console.log('playersPoints - init', playersPoints);
  };

  const createDeck = () => {
    deck = [];

    for (let i = 2; i <= 10; i++) {
      for (let type of types) {
        deck.push(i + type);
      }
    }

    for (let type of types) {
      for (let special of specials) {
        deck.push(special + type);
      }
    }

    return _.shuffle(deck);
  };

  const askCard = () => {
    if (!deck.length) {
      throw 'No hay cartas en el deck';
    }

    return deck.pop();
  };

  const valueCard = (card) => {
    const value = card.substring(0, card.length -1);

    return (isNaN(value))
    ? (value === 'A') ? 11 : 10
    : Number(value);
  };

  const createCardDOM = (card, turnPlayer) => {
    const cardElement = document.createElement('img');
    cardElement.src = `assets/cartas/${card}.png`;
    cardElement.classList.add('cards');

    app.cardsContainerQS[turnPlayer].appendChild(cardElement);
  };

  const addPlayerPoints = () => {
    app.stopMatchQS.disabled = false;

    const card = askCard();
    const playerPoints = accumulatePoints(card, 0);

    createCardDOM(card, 0);

    if (playerPoints > 21) {
      app.askCardQS.disabled = true;
      app.stopMatchQS.disabled = true;
      addIaPoints(playerPoints);
    }
    else if (playerPoints === 21) {
      app.askCardQS.disabled = true;
      app.stopMatchQS.disabled = true;
      addIaPoints(playerPoints);
    }
  };

  const comparePoints = () => {
    console.log('playersPoints - comparePoints', playersPoints);

    const [minPoints, iaPoints] = playersPoints;

    setTimeout(() => {
      if (iaPoints === minPoints) {
        alert('DRAW GAME');
      }
      else if (minPoints > 21) {
        alert('IA WIN, YOU LOSE');
      }
      else if (iaPoints > 21) {
        alert('YOU WIN, IA LOSE');
      }
      else {
        alert('IA WIN, YOU LOSE');
      }
    }, 500);
  };

  const accumulatePoints = (card, turnPlayer) => {
    console.log('playersPoints - accumulatePoints', playersPoints);

    playersPoints[turnPlayer] = playersPoints[turnPlayer] + valueCard(card);
    app.playersSmallQS[turnPlayer].textContent = playersPoints[turnPlayer];

    return playersPoints[turnPlayer];
  };

  const addIaPoints = (minPoints) => {
    let iaPoints = 0;

    do {
      const card = askCard();
      const iaTurn = playersPoints.length - 1;

      iaPoints = accumulatePoints(card, iaTurn);
      createCardDOM(card, iaTurn);
    }
    while ((iaPoints < minPoints) && (minPoints <= 21));

    comparePoints();

    console.log('playersPoints - addIaPoints', playersPoints);
  };

  const newMatch = () => {
    init();
  };

  const disableButtons = (ev) => {
    app.askCardQS.disabled = true;
    ev.target.disabled = true;
  };


  app.newMatchQS.addEventListener('click', () => {
    newMatch();
  });

  app.askCardQS.addEventListener('click', () => {
    addPlayerPoints();
  });

  app.stopMatchQS.addEventListener('click', (ev) => {
    disableButtons(ev);
    addIaPoints(playersPoints[0]);
  });

  return {
    app,
    crearDeck: createDeck,
    init,
    puntosJugadores: playersPoints
  };
})();
