/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
let phraseLetters;
let randomPhrase;
let letter;
let gameOverMessage = document.getElementById('game-over-message');
let keys = document.getElementsByClassName('key');
let lives = document.querySelectorAll('.tries img');
let gameStatus;
let phrase;
const wonMessage = 'Congratulations You Have Won!!';
const lostMessage = 'Sorry you have run out of lives. Please Try Aagain!';

class Game{
 constructor(){
   this.missed = 0;
   this.activePhrase = null;
   this.phrases = ["Curiosity Killed The Cat", "A Dime a Dozen", "Piece of Cake", "Close But No Cigar", "Cup of Joe"];
   this.phrase = this.getRandomPhrase();
 };

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase(){
    const randomized = Math.floor( Math.random() * this.phrases.length );
    return randomPhrase = this.phrases[randomized];
    game.activePhrase = randomPhrase.toLowerCase();
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
    const randomPhrase = this.getRandomPhrase();
    const phrase = new Phrase(randomPhrase);
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
    console.log(letter);
    // checkLetter(letter);
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
  };

  resetGame(){
    for(let i = 0; i < lives.length; i++){
      lives[i].src='images/liveHeart.png';
    }

    $('#game-over-message').empty();
    $('#phrase ul').empty();
  };

}




 // Game.js to create a Game class methods for starting and ending the game, handling
 // interactions, getting a random phrase, checking for a win, and removing a life from the
 // scoreboard.
