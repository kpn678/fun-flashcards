# Fun Flashcards

## Table of Contents
- [Overview](#overview)
- [Set Up](#set-up)
- [Video Walkthrough](#video-walkthrough)
- [Code Architecture](#code-architecture)
- [Technologies Implemented](#technologies-implemented)
- [Reflection](#reflection)
- [Contributor](#contributor)

## Overview
**Fun Flashcards** is a game that tests your knowledge on iterator methods. Using the terminal, you go through a set of multiple choice questions and receive feedback on whether your answer is correct or incorrect.

#### Goals
- To make a working game in the terminal using JS code that is DRY and follows SRP
- To begin utilizing TDD by writing a comprehensive test suite via Mocha/Chai
- To complete iterations 1-3 along with the [project board](https://github.com/kpn678/fun-flashcards/projects/1) and timer extensions in iteration 4 without bugs or missing components

#### Project Specs
The rubric and specs can be found [here](https://frontend.turing.edu/projects/flash-cards.html).

## Set Up
1. Fork this [repository](https://github.com/kpn678/fun-flashcards.git).
2. Clone the repository into your local machine and navigate into it.
3. Run `npm test` in your terminal to use testing suite to test code.
4. Run `node index.js` in your terminal to play the game.

## Video Walkthrough

### Click Below ↓
[<img width="628" alt="Screenshot of Fun Flashcards game in terminal" src="https://user-images.githubusercontent.com/99382481/168177911-b0f5886b-9bae-4f62-8bb5-3b86ff64a968.png">](https://drive.google.com/file/d/1yUonhPKlqptZt9JUH_v7gt8H12K9fS1G/view?usp=sharing)

Information shown at the end of the game (not demonstrated in the video due to video becoming too lengthy):

<img width="458" alt="Screenshot of round over and total time spent on game at the end of the game" src="https://user-images.githubusercontent.com/99382481/168178165-3fe9677c-188a-4340-92a6-79c4ec7c485f.png">

## Code Architecture
- *data.js* - data for the cards used in *Game.js*
- *util.js* - code to make the game run properly in the console
- *index.js* - where we start the game

All Class files including relevant properties and methods along with their corresponding test files are listed below:
- *Card.js* & *Card-test.js*
- *Turn.js* & *Turn-test.js*
- *Deck.js* & *Deck-test.js*
- *Round.js* & *Round-test.js*
- *Game.js* & *Game-test.js*

## Technologies Implemented
- JavaScript
- Mocha/Chai

## Reflection
- While writing my own tests to test my code felt strange at first, even tedious at times, it eventually became a great check to ensure that I really understood the code I was writing and why I wrote it like that
- There were some parts that went easier than expected, but of course, there were sections like the `takeTurn()` method in `Round.js` that were quite difficult to figure out
- Other extensions I would have enjoyed looking into more were the "more practice" and "build another flashcards dataset" ones

## Contributor
- [Kristy Nguyen](https://github.com/kpn678)
