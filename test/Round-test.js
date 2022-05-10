const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1,
      card2,
      card3,
      deck,
      round;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should start off with a deck', () => {
    expect(round.deck).to.equal(deck);
  });

  it('should have the first card in the deck be the current card at the start of the round', () => {
    expect(round.currentCard).to.equal(deck.cards[0]);
  });

  it('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

  it('should begin with 0 turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should begin with 0 incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });


});
