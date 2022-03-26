// Find generate button by query selector
var generateBtn = document.querySelector("#generate");

// Arrays of characters;
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['~', '!', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '<', '>', '?']

// Collect user input for character type choices
function collectUserData () {

    var characterLength = window.prompt("Enter a NUMBER of characters for your password length. Number must not be lower than 8 and no higher than 128.");
    window.alert("You have chosen a CHARACTER LENGTH of " + characterLength + ".");
  
    if (characterLength < 8 || characterLength > 128) {
      window.alert("Invalid entry. Enter a NUMBER of characters for your password length. The NUMBER you enter must be no lower than 8 and no higher than 128. Try again!");
      return;
    }

    if (characterLength >= 8 || characterLength <= 128) {
        console.log(characterLength);
      }
      else {
        window.alert("Invalid entry. Please enter a NUMBER of characters for your password length. The NUMBER you enter must be no lower than 8 and no higher than 128. Try again!");
        characterLength();
      }

    var useLowerCase = window.confirm("Would you like to include LOWERCASE letters in this password?");
    console.log(useLowerCase);
    var useUpperCase = window.confirm("Would you like to include UPPERCASE letters in this password?");
    console.log(useUpperCase);
    var useNumber = window.confirm("Would you like to include NUMBERS in this password?");
    console.log(useNumber);
    var useSpecialChar = window.confirm("Would you like to include SPECIAL CHARACTERS in this password?");
    console.log(useSpecialChar);

    if (useLowerCase === false && useUpperCase === false && useNumber === false && useSpecialChar === false) {
        alert("You need to choose at lease one CHARACTER TYPE. Try again!");
        return;
    }

    // put user input into object
    var userData =
      {
        characterLength: characterLength,
        useLowerCase: useLowerCase,
        useUpperCase: useUpperCase,
        useNumber: useNumber,
        useSpecialChar: useSpecialChar
      }

    return userData;
}

// Generate password based on user input
function generatePassword() {

    var userData = collectUserData();
    console.log(userData);

    var userPassword = "";
    // if statemenets to prompt user character choices
    var userCharArr = []
    if (userData.useLowerCase === true) {
      console.log(lowercase);
      userCharArr = [...userCharArr, ...lowercase]
    }

    if (userData.useUpperCase === true) {
      userCharArr = [...userCharArr, ...uppercase];
    }

    if (userData.useNumber === true) {
      userCharArr = [...userCharArr, ...numbers];
    }

    if (userData.useSpecialChar === true) {
      userCharArr = [...userCharArr, ...special];
    }

    // for loop using math random to loop through character type array
    for (var i = 0; i < userData.characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * userCharArr.length);
      var randomCharacter = userCharArr[randomIndex];
      userPassword = userPassword + randomCharacter;
    }

  return userPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

