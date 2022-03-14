// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writeCharacterLength() {
  var characterLength = window.prompt("Enter number of characters for password length. Number must be at least 8 characters in length and no more than 128 characters.");
  var maxCharacterLength = 128;
  var minCharacterLength = 8;

  window.alert("You entered a character length of " + characterLength);
}

writeCharacterLength();

function lowercase() {
  var includeLowercase = true;
  var excludeLowercase = false;
}