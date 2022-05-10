class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.match = false;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.match = true;
    }
    return this.match;
  }
  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
};

module.exports = Turn;
