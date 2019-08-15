/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



 class Phrase{
   constructor(randomPhrase){
     this.phrase = this.randomPhrase;
   }

   addPhraseToDisplay(){

     let char;

     for (char in randomPhrase){
       if(randomPhrase[char] === " "){
         $('#phrase ul').append(`<li class="space"> </li>`);
       } else{
         let lowerLetter = randomPhrase[char].toLowerCase();
         $('#phrase ul').append(`<li class="letter">${lowerLetter}</li>`);
       }
     };

  };

  /**
  * Checks to see if the key clicked matches any chars of randomPhrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter){

  };

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {};

}
