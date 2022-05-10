const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn;
  let card;
  beforeEach(() => {
    turn = new Turn('array', card);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have arguments for a string guess and Card object', () => {
    expect(turn.guess).to.equal('array');
    expect(turn.card).to.deep.equal(card);
  });

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal('array');
  });

  it('should return the card', () => {
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should return boolean depending on if user guess matches correct answer on card', () => {
    turn.evaluateGuess();
    expect(turn.match).to.equal(false);
  });

  it('should return incorrect or correct depending on if user guess matches correct answer on card', () => {
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  })
});
