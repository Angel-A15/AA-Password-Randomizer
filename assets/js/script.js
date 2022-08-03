/*code testing
console.log(
  chNum + chUal + chLal + chSpec
);*/

/*var getRandomspecChar(Math.floor(Math.random()*30) +1);
(length < 8 | length > 129);
for (var i=0; i < length; i++);*/
  //for(var i = 8; i < 129; i++){
  //  password = password + prmoptNum.charAt(Math.floor(Math.random()*Math.floor(value.length)))
//}




//interact with answers
// a: have the anser options respond 
//b: find a way to generate random numbers and hold the info 

//password is shown when all prompts are answered only

//Password Characters
var ualphChar = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var lalphChar = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var numChar = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var specChar = ("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~");
//Password Characters

 
//PW Characters Compacted
var chNum = document.getElementById("chNum");
var chUal = document.getElementById("chUal");
var chLal = document.getElementById("chLal");
var chSpec = document.getElementById("chSpec");
//PW Characters Compacted



//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Password generator function
function generatePassword() {

  //Communication with the user
  window.alert("Welcome!");
  window.alert("Lets get started on your password!")
  //Communication with the user
  
  //Password character limit option
  var promptLimit = window.prompt('Choose how many characters you want your password to have.(min-8 max-128)');
    
    if (promptLimit > 7 && promptLimit < 129){
      console.log(promptLimit);

    } else if (promptLimit < 7 || promptLimit > 128){
      window.alert("Please type a valid option.")
    }
    //Password character limit option

    //Numeric characters Option
  var promptNum = window.prompt('Do you want to add numeric characters?');
    if (promptNum === "Yes" || promptNum === "yes") {
      console.log("Numeric Character was selected.");
      //could be wrong:for(var i = 0; i < numChar.length; i++) {
        //console.log(numChar[i]);
      }

    }  else if (promptNum === "No" || promptNum === "no") {

      console.log("Numeric Character was deselected.")
    } else {
      window.alert("Please type an option.");
    }
    //Numeric characters Option
  
    //upper case chara option
  var promptUalph = window.prompt('Do you want to add upper case characters?');
    if (promptUalph === "Yes" || promptUalph === "yes") {
      
      console.log("Upper case character was selected.");

    }  else if (promptUalph === "No" || promptUalph === "no") {
      var promptUalph
      console.log("Uppper case character was deselected.")
    } else {
      window.alert("Please type an option.");
    }
    //upper case chara option
    
    //lower case chara
  var promptLalph = window.prompt('Do you want to add lower case characters?');
    if (promptLalph === "Yes" || promptLalph === "yes") {
      
      console.log("Lower case character was selected.");

    }  else if (promptLalph === "No" || promptLalph === "no") {
      var promptLalph
      console.log("Lower case character was deselected.")
    } else {
      window.alert("Please type an option.");
    }
    //lower case chara

    //special charac
  var promptSpecsym = window.prompt('Do you want to add special characters?');
    if (promptSpecsym === "Yes" || promptSpecsym === "yes") {
      
      console.log("Special character was selected.");

    }  else if (promptSpecsym === "No" || promptSpecsym === "no") {
      var promptUalph
      console.log("Special character was deselected.")
    } else{
      window.alert("Please type an option.");
    }
    //special charac
  
    //Generated PW 
  return "Generated password will go here!"
    //console.log("return"): to check for password before adding in box
  

}
//Password generator function

//Transfers password to the #password input
function writePassword() {
  var password = generatePassword(

  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Transfers password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






