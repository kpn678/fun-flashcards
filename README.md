# Fun Flashcards

## Overview
**Fun Flashcards** is a game that tests your knowledge on iterator methods. Using the terminal, you go through a set of multiple choice questions and receive feedback on whether your answer is correct or incorrect.

#### Goals
- To make a working game in the terminal using JS code that is DRY and follows SRP
- To begin utilizing TDD by writing a comprehensive test suite via Mocha/Chai

#### Project Specs
The rubric and specs can be found [here](https://frontend.turing.edu/projects/flash-cards.html).

## Set Up
1. Fork this [repository](https://github.com/kpn678/tic-tac-toe.git).
2. Clone the repository into your local machine and navigate into it.
3. Run `npm test` in your terminal to use testing suite to test code.
4. Run `node index.js` in your terminal to play the game.

## Code Architecture
- *data.js* - data for the cards used in *Game.js*
- *util.js* - code to make the game run properly in the console
- *index.js* - where we start the game

All Class properties and methods files along with their corresponding test files are listed below:
- *Card.js* & *Card-test.js*
- *Turn.js* & *Turn-test.js*
- *Deck.js* & *Deck-test.js*
- *Round.js* & *Round-test.js*
- *Game.js* & *Game-test.js*

## Technologies Implemented
- JavaScript
- Mocha/Chai
