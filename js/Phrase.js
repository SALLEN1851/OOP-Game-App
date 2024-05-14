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
            }
    
            phraseUl.appendChild(letterLi);
        };
    
        return phrase;
    };