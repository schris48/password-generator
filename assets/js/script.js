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

//Prompt user to enter character length between 8 and 128

function writeCharacterLength() {
  var characterLength = window.prompt("Enter number of characters for password length. Number must be at least 8 characters in length and no more than 128 characters.");
  window.alert("You have chosen a character length of " + characterLength + ".");
  
  if (characterLength < 8) {
    window.alert("Invalid entry. Please ensure character length is at least 8 characters. Try again!");
  }

  if (characterLength > 128) {
    window.alert("Invalid entry. Please ensure character length does not exceed 128 characters. Try again!");
  }
  
  if (characterLength => 8 || characterLength <= 128) {
    console.log(characterLength);
  }
}

writeCharacterLength();

// Prompt user to decide whether to include lowercase letters

function promptLowercase() {
  var promptLowercase = window.prompt("Would you like to include LOWERCASE letters in this password? YES or NO?");  
  
  // if user chooses yes to include lowercase
  if (promptLowercase === "yes" || promptLowercase === "YES") {
    // include lowercase letters in password
    window.alert("You have chosen to include LOWERCASE letters in this password.");
  }

  // if user chooses not to include lowercase
  if (promptLowercase === "no" || promptLowercase === "NO") {
    // exclude lowercase letters from password
    window.alert("You have chosen not to include LOWERCASE letters in this password.");
  }

  if (promptLowercase === "no" || promptLowercase === "NO" || promptLowercase === "yes" || promptLowercase === "YES") {
    console.log(promptLowercase)
  }
    // if user enters invalid option
    else {
        window.alert("Invalid entry. Please enter YES if you want to include LOWERCASE letters in this password and NO if you do not. Try again!");
      }
    };
  
  promptLowercase();

// Prompt user to decide whether to include uppercase letters
function promptUppercase() {
  var promptUppercase = window.prompt("Would you like to include UPPERCASE letters in this password? YES or NO?");  
  
  // if user chooses yes to include uppercase
  if (promptUppercase === "yes" || promptLowercase === "YES") {
    // include uppercase letters in password
    window.alert("You have chosen to include UPPERCASE letters in this password.");
  }

  // if user chooses not to include uppercase
  if (promptUppercase === "no" || promptLowercase === "NO") {
    // exclude uppercase letters from password
    window.alert("You have chosen not to include UPPERCASE letters in this password.");
  }

  if (promptUppercase === "no" || promptUppercase === "NO" || promptUppercase === "yes" || promptUppercase === "YES") {
    console.log(promptUppercase)
  }
    // if user enters invalid option
    else {
        window.alert("Invalid entry. Please enter YES if you want to include UPPERCASE letters in this password and NO if you do not. Try again!");
      }
    };
  promptUppercase ();

// Prompt users to decide whether to include numeric values
function promptNumbers() {
  var promptNumbers = window.prompt("Would you like to include NUMBERS in this password? YES or NO?");  
    
  // if user chooses yes to include numeric values
  if (promptNumbers === "yes" || promptNumbers === "YES") {
    // include numeric values in password
    window.alert("You have chosen to include NUMBERS in this password.");
  }
  
  // if user chooses not to include numeric values
  if (promptNumbers === "no" || promptNumbers === "NO") {
    // exclude numeric values from password
    window.alert("You have chosen not to include NUMBERS in this password.");
  }
  
  if (promptNumbers === "no" || promptNumbers === "NO" || promptNumbers === "yes" || promptNumbers === "YES") {
    console.log(promptNumbers)
  }
    // if user enters invalid option
    else {
        window.alert("Invalid entry. Please enter YES if you want to include NUMBERS in this password and NO if you do not. Try again!");
      }
    };
  promptNumbers ();

// Prompt users to decide whether to include special characters
function promptSpecialChar() {
  var promptSpecialChar = window.prompt("Would you like to include SPECIAL CHARACTERS (e.g. $ ! # %) in this password? YES or NO?");  
    
  // if user chooses yes to include special characters
  if (promptSpecialChar === "yes" || promptSpecialChar === "YES") {
    // include special characters in password
    window.alert("You have chosen to include SPECIAL CHARACTERS in this password.");
  }
  
  // if user chooses not to include special characters
  if (promptSpecialChar === "no" || promptSpecialChar === "NO") {
    // exclude special characters from password
    window.alert("You have chosen not to include SPECIAL CHARACTERS in this password.");
  }
  
  if (promptSpecialChar === "no" || promptSpecialChar === "NO" || promptSpecialChar === "yes" || promptSpecialChar === "YES") {
    console.log(promptSpecialChar)
  }
    // if user enters invalid option
    else {
        window.alert("Invalid entry. Please enter YES if you want to include SPECIAL CHARACTERS in this password and NO if you do not. Try again!");
      }
    };
  promptSpecialChar ();