const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card1;
  let turn1;
  let card2;
  let turn2;
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn1 = new Turn('array', card1);
    card2 = new Card(10, 'What is the hottest season?', ['spring', 'summer', 'winter'], 'summer');
    turn2 = new Turn('summer', card2);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
    expect(turn2).to.be.an.instanceof(Turn);
  });

  it('should have arguments for a string guess and Card object', () => {
    expect(turn1.guess).to.equal('array');
    expect(turn1.card).to.deep.equal(card1);
    expect(turn2.guess).to.equal('summer');
    expect(turn2.card).to.deep.equal(card2);
  });

  it('should return the guess', () => {
    expect(turn1.returnGuess()).to.equal('array');
    expect(turn2.returnGuess()).to.equal('summer');
  });

  it('should return the card', () => {
    expect(turn1.returnCard()).to.deep.equal(card1);
    expect(turn2.returnCard()).to.deep.equal(card2);
  });

  it('should return false if user guess does not match correct answer on card', () => {
    turn1.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
  });

  it('should return true if user guess matches correct answer on card', () => {
    turn2.evaluateGuess();
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should return incorrect! if turn.evaluateGuess() evaluates to false', () => {
    turn1.giveFeedback();
    expect(turn1.giveFeedback()).to.equal('incorrect!');
  });

  it('should return correct! if turn.evaluateGuess() evaluates to true', () => {
    turn2.giveFeedback();
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
