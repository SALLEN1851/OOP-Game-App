/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }; 


    // Adds letter placeholders to the display when the game starts
    addPhraseToDisplay() {
        const phrase = this.phrase;
        console.log('Phrase:', phrase); 
    
        const phraseUl = document.querySelector('#phrase ul');
        console.log('Selected UL element:', phraseUl);
    
        for (let i = 0; i < phrase.length; i++) {
            let letter = phrase[i];
            const letterLi = document.createElement('li');
    
            console.log('Processing letter:', letter); 
    
            if (letter === ' ') {
                letterLi.className = 'space';
                letterLi.textContent = ' ';
                console.log('Added space element:', letterLi); 
            } else {
                letterLi.className = `hide letter ${letter}`;
                letterLi.textContent = `${letter}`;
                console.log('Added letter element:', letterLi); 
            };
    
            phraseUl.appendChild(letterLi);
        };
    
        return phrase;
    };

    // Checks to see if the letter selected by the player matches a letter in the phrase
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    // Reveals the letter(s) on the board that matches the player's selection
    showMatchedLetter(letter) {
        console.log('Letter to match:', letter); 

        const matchingListItems = document.getElementsByClassName(letter);
        console.log(`Found ${matchingListItems.length} elements with class '${letter}'`);
    
        for (let i = 0; i < matchingListItems.length; i++) {
            let matchedLi = matchingListItems[i];
            console.log('Before update:', matchedLi.className); 
    
            matchedLi.classList.remove('hide');
            matchedLi.classList.add('show');
    
            console.log('After update:', matchedLi.className);
        };
    };
}; 