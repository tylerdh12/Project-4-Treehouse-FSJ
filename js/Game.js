/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // Global Variables
let randomPhrase;
let letter;
let gameStatus;
let randomNum;
let phrase;

// Global Functions
function randomPhraseNum() {
  let randomNum = Math.floor( Math.random() * phrases.length);
  return randomNum;
}

// Document Selectors
let gameOverMessage = $('#game-over-message');
let keys = $('.key');
let lives = $('.tries img');

// Messages
const wonMessage = 'Congratulations You Have Won!!';
const lostMessage = 'Sorry you have run out of lives. Please Try Aagain!';

// Phrase Objects
const phrases = [
  {
    phrase : "Curiosity Killed The Cat",
  },
  {
    phrase : "A Dime a Dozen",
  },
  {
    phrase : "Piece of Cake",
  },
  {
    phrase : "Close But No Cigar",
  },
  {
    phrase : "Cup of Joe",
  },
];

// Opening to Game Class
class Game{
 constructor(){
   this.missed = 0;
   this.phrase = this.getRandomPhrase();
   this.activePhrase = null;
 };

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase(){
    randomPhraseNum();
    phrase = phrases[randomPhraseNum()];
    this.activePhrase = phrase;
    return phrase;
  };

  /**
  * Begins game by selecting a random phrase and displaying it to user
  * hides the overlay sets the game-over-message to empty
  * sends new random phrase to the addPhraseToDisplay()
  **/
  startGame(){
    game = new Game();
    $('#overlay').hide();
    this.resetGame();
    let phrase = new Phrase();
    phrase.addPhraseToDisplay();
  };

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameStatus){
    if (gameStatus === 'won'){
      gameOverMessage.append(wonMessage);
      $('#overlay').show();
    } else if(gameStatus === 'lost') {
      gameOverMessage.append(lostMessage);
      $('#overlay').show();
    }
  };

  /**
  * Handles user interaction
  * @param {string} innerHTML of keyboard buttons
  */
  handleInteraction(index){
    index.classList.add('chosen');
    index.disabled = true;
    letter = index.innerHTML;
    phrase.checkLetter(letter);
  };

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */

  checkForWin(){
    // this is a missed counter for a game over on loss of lives
    if (game.missed < 4){
      this.removeALife();
    } else {
      this.gameOver('lost');
    }
  };

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeALife(){
    //  change liveHeart.png to lostHeart.png
    lives[this.missed].src='images/lostHeart.png';
    return this.missed ++;
    this.checkForWin();
  };

  resetGame(){
    for(let i = 0; i < lives.length; i++){
      lives[i].src='images/liveHeart.png';
    }

    $('#game-over-message').empty();
    $('#phrase ul').empty();
  };

}


function newFunction() {
  Phrase.checkLetter(letter);
}
 // Game.js to create a Game class methods for starting and ending the game, handling
 // interactions, getting a random phrase, checking for a win, and removing a life from the
 // scoreboard.
