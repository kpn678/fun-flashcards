const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[0];
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard = this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    };
    this.turns++;
    this.returnCurrentCard();
    return turn.giveFeedback();
  }
}

module.exports = Round;
