/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Function to start a new game

const startGame = () => {
    console.log("Starting a new game");
    game = new Game();
    game.startGame();
};  

startGame();
