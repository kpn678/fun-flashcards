class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  countCards(card) {
    return this.cards.length;
  }
}

module.exports = Deck;
