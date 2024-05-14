/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Create a Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

class Game { 
    constructor() {
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = null
    };

// Creates phrases for use in game
    createPhrases() {
        const phrases = [
            'May the Force be with you',
            'You talking to me',
            'Here is looking at you kid',
            'You cant handle the truth',
            'I see dead people'
        ];
    console.log('Phrases array:', phrases);

// Creates an array of Phrase objects using map function.
    const phrasesArray = phraseStrings.map(string => new Phrase(string));
        return phrasesArray;
      };

// Selects random phrase from phrases property
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
             return randomPhrase;
    };

// Begins game by selecting a random phrase and displaying it to user

    startGame() {
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }; 

// Checks to see if the button clicked by the player matches a letter in the phrase and then directs the game based on a correct or incorrect guess.
// Method to handle game interactions

    handleInteraction(button) {
        let letter = button.innerText;

        if(this.activePhrase.checkLetter(letter)) {
            button.disabled = true;
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            
            if(this.checkForWin()) {
                this.gameOver(true);
            };
        } else {
            button.classList.add('wrong');
            if(button.disabled !== true) {
                button.disabled = true;
                this.removeLife();
            };
        };
    };

// Increases the value of the missed property, and removes a life from the scoreboard. 
// JS Method to remove a life from the scoreboard.

    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        
        // ends game once player is out of lives.
        this.missed += 1; 
        if(this.missed >= 5) {
            this.gameOver(false);
        };
    };

    