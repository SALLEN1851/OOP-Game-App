/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameButton = document.getElementById('#btn__reset');
const keyboardDiv = document.getElementById('#qwerty');
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


// Adds click event listerners to each of the onscreen keyboard buttons
keyboardDiv.addEventListener('click', (e) => {
    if(e.target.className === 'key') {
        handleInteraction(e.target);
    }
});


// Adds keyup event listener to the physical keyboard
document.addEventListerner('keyup', (e) => {
    // allows use of physical keyboard to interact with the game
    if (overlayDiv.style.display === 'none') {
        keysArray.forEach((key) => { 
            if (e.key === key.textContent) {
                handleInteraction(key);
            }           
        });
    }

    // Allows the Enter key to be used to start a new game
    if (overlayDiv.style.display !== 'none' && e.key === 'Enter') {
        startGame();
    }
});