const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn;
  let card;
  beforeEach(() => {
    turn = new Turn('object', card);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have arguments for a string guess and Card object', () => {
    expect(turn.guess).to.equal('object');
    expect(turn.card).to.deep.equal(card);
  });
});
