/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
   constructor(randomPhrase){
     this.phrase = this.randomPhrase;
   }

   addPhraseToDisplay(){

     game.activePhrase = randomPhrase.toLowerCase();

     let char;

     for (char in randomPhrase){
       if(randomPhrase[char] === " "){
         $('#phrase ul').append(`<li class="space"> </li>`);
       } else{
         let lowerLetter = randomPhrase[char].toLowerCase();
         $('#phrase ul').append(`<li class="hide letter ${lowerLetter}">${lowerLetter}</li>`);
       }
     };
  };

  /**
  * Checks to see if the key clicked matches any chars of randomPhrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter){
    phraseLetters = document.querySelectorAll('li.letter');
    //  for letters of phrase check input value to phrase chars
    //  if letter does match run showMatchedLetter(letter)
    //  if letter doesnt match remove life
    // console.log(letter);

    for(let i = 0; i < phraseLetters.length; i++){
      if(phraseLetters[i].innerHTML === letter){
        this.showMatchedLetter(i)
      } else {
        game.removeALife();
      }
    }

  };

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter){
    phraseLetters[letter].classList.add("show");
    //  display the char of the corresponding letters check if game is won
  };

}
