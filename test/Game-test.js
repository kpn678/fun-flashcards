const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should begin current round value that is null', () => {
    expect(game.currentRound).to.equal(null);
  });
});
