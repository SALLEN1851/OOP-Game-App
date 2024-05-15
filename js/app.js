/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameButton = document.querySelector('#btn__reset');
const keyboardDiv = document.querySelector('#qwerty');
const keysArray = document.querySelectorAll('.key');
const overlayDiv = document.querySelector('#overlay');

// Function to start a new game
const startGame = () => {
    console.log("Starting a new game");
    game = new Game();
    game.startGame();
};  

// Function to handle onscreen keyboard button clicks
const handleInteraction = (target) => {
    game.handleInteraction(target);
};

// Adds a event listener to the "Start Game" button when clicked
startGameButton.addEventListener('click', startGame);
console.log('Start Game button:', startGameButton);


// Adds click event listerners to each of the onscreen keyboard buttons
keyboardDiv.addEventListener('click', (e) => {
    if(e.target.className === 'key') {
        handleInteraction(e.target);
    }
});


// Adds keyup event listener to the physical keyboard
document.addEventListener('keyup', (e) => {
    // allows use of physical keyboard to interact with the game
    if (overlayDiv.style.display === 'none') {
        keysArray.forEach((key) => { 
            if (key.textContent === e.key) {
                handleInteraction(key);
            }           
        });
    }

    // Allows the Enter key to be used to start a new game
    if (overlayDiv.style.display !== 'none' && e.key === 'Enter') {
        startGame();
    }
});