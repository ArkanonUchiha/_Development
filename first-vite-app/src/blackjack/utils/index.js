import _ from 'underscore';

/*
  2C = TWO OF CLUBS
  2D = TWO OF DIAMONDS
  2H = TWO OF HEARTS
  2S = TWO OF SPADES
*/

const newMatchQS = document.querySelector('#newMatch'),
  askCardQS = document.querySelector('#askCard'),
  stopMatchQS = document.querySelector('#stopMatch'),
  playersSmallQS = document.querySelectorAll('small'),
  cardsContainerQS = document.querySelectorAll('.cards-container');

let deck = [],
  playersPoints = [];

const types = ['C', 'D', 'H', 'S'],
  specials = ['A', 'J', 'Q', 'K'];

export const app = {
  _,
  newMatchQS,
  askCardQS,
  stopMatchQS,
  playersSmallQS,
  cardsContainerQS,
  deck,
  playersPoints,
  types,
  specials
};
