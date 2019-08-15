/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let randomPhrase;

class Game{
 constructor(){
   this.missed = 0;
   this.activePhrase = null;
   this.phrases = ["Curiosity Killed The Cat", "A Dime a Dozen", "Piece of Cake", "Close But No Cigar", "Cup of Joe"];
   this.phrase = this.getRandomPhrase();
 }

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase(){
    const randomized = Math.floor( Math.random() * this.phrases.length );
    return randomPhrase = this.phrases[randomized];
  };

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame(){
    game = new Game();
    $('#overlay').hide();
    const randomPhrase = this.getRandomPhrase();
    this.activePhrase = randomPhrase;
    const phrase = new Phrase(randomPhrase);
    phrase.addPhraseToDisplay();
  }

  gameOver(){

  }

  handleInteraction(key){


  }

  checkForWin(){

  }

  removeALife(){

  }

}


 // Game.js to create a Game class methods for starting and ending the game, handling
 // interactions, getting a random phrase, checking for a win, and removing a life from the
 // scoreboard.
