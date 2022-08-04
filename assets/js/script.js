//Password Characters
var chUal= ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var chLal = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var chNum = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var chSpec = ("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~");
//Password Characters

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//PW Characters Compacted
var chBoth = chUal, chLal;
var chAll = chNum, chUal, chLal, chSpec;
//PW Characters Compacted

//functions for characters

//character limit function
var limit =function(){

var promptLimit = window.prompt('How many characters you want your password to have.(min-8 max-128)');
    
if (promptLimit > 7 && promptLimit < 129){ 

  var length = parseInt(promptLimit);
  
  console.log(promptLimit);

} while (length <7 || length > 129 || Number.isNaN(length)){
  length = parseInt (window.prompt('How many characters you want your password to have.(min-8 max-128)'));
} 

}
//character limit function

//numeric function
var numbers =function(){

var promptNum = window.prompt('Do you want to add numeric characters?');
if (promptNum === "Yes" || promptNum === "yes") {
  console.log("Numeric Character was selected.");
}
  else if(promptNum === "No" || promptNum === "no") {

  console.log("Numeric Character was deselected.");

} else {
  window.alert("Please type an option.");
  return numbers();
}
}
//numeric function

//upper case function
var upperAlph = function() {

var promptUalph = window.prompt('Do you want to add upper case characters?');
if (promptUalph === "Yes" || promptUalph === "yes") {
  
  console.log("Upper case character was selected.");

}  else if (promptUalph === "No" || promptUalph === "no") {
  var promptUalph
  console.log("Uppper case character was deselected.")
} else {
  window.alert("Please type an option.");
  return upperAlph();
}
}
//upper case function

//lower case function
var lowerAlph = function(){

var promptLalph = window.prompt('Do you want to add lower case characters?');
if (promptLalph === "Yes" || promptLalph === "yes") {
  
  console.log("Lower case character was selected.");

}  else if (promptLalph === "No" || promptLalph === "no") {
  var promptLalph
  console.log("Lower case character was deselected.")
} else {
  window.alert("Please type an option.");
  return lowerAlph();
}
}
//lower case function

//special character function
var speChar = function(){

var promptSpecsym = window.prompt('Do you want to add special characters?');
if (promptSpecsym === "Yes" || promptSpecsym === "yes") {
  
  console.log("Special character was selected.");

}  else if (promptSpecsym === "No" || promptSpecsym === "no") {
  console.log("Special character was deselected.")
} else{
  window.alert("Please type an option.");
  return speChar();
}
}
//special character function

//random/loop part
function randCall() {
  var randP = ''

    for(var i=0; i < length; i++){

      if (promptLalph === true) {

        randP += chLal.charAt(Math.floor(Math.random()* chLal.length));
      }

      if (promptUalph === true) {

        randP += chUal.charAt(Math.floor(Math.random()* chUal.length));
      }
   
      if (promptSpecsym === true) {

        randP += chSpec.charAt(Math.floor(Math.random()* chSpec.length));
      }
   
      if (promptNum === true) {

        randP += chNum.charAt(Math.floor(Math.random()* chNum.length));
      }
    }
  console.log(randP)
}
//random/loop part




//Password generator function
function generatePassword() {

    //Communication with the user
    window.alert("Welcome!");
    window.alert("Lets get started on your password!")
    //Communication with the user
  
    //Password character limit opt
    limit();
    //Password character limit opt

    //Numeric characters opt

    window.alert("Answer the following questions with 'Yes' or 'No'.");

    //Numeric characters opt
    numbers();
    
    //upper case chara opt
    upperAlph();  
    //upper case chara opt

    //lower case chara opt
    lowerAlph();
    //lower case chara opt

    //special chara opt
    speChar();
    //special chara opt

    //generatedPW
    randCall();

}
//Password generator function



//Transfers password to the #password input
function writePassword() {
  var password = generatePassword();



  console.log(password);

  //text for PW
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password;

}
//Transfers password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
