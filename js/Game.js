/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Create a Game class methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

class Game { 
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
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
    };

// Creates an array of Phrase objects using map function.
    const phrasesArray = phraseStrings.map(string => new Phrase(string));
        return phrasesArray;
      };
