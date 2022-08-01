// Assignment code here


//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hey! You touched the button!")

  //1. Prompted for password criteria
  //  a: Password length
  //  b: lowercase, uppercase, numbers, special symbols
  //2. Validate the input
  //3. Generate password based on criteria
  //4. Display password

  return "Generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);