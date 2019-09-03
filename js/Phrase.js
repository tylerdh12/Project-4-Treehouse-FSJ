/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
   constructor(phrase){
     this.phrase;
   }

   addPhraseToDisplay(){

     game.activePhrase = phrase.phrase.toLowerCase();

     let char;

     for (char in game.activePhrase){
       if(game.activePhrase[char] === " "){
         $('#phrase ul').append(`<li class="space"> </li>`);
       } else{
         let lowerLetter = game.activePhrase[char];
         $('#phrase ul').append(`<li class="letter ${lowerLetter}">${lowerLetter}</li>`);
       }
     };
  };

  /**
  * Checks to see if the key clicked matches any chars of randomPhrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter){
    console.log(letter);

      if($('.letter').hasClass(letter)){
        this.addClass('show');
      } else {
        game.removeALife();
      }

  };

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter){
    $('.letter').classList.add("show");
    //  display the char of the corresponding letters check if game is won
  };

}
