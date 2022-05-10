class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[0];
  }
  updateCurrentCard() {
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
}

module.exports = Round;
