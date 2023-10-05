// Assignment code here
var generateBtn = document.querySelector("#generate");

// Step 1: assign var for all characters//
var num = ['0123456789'];
var specCharacters = ['!@#$%&()-=+'];
var lowCase = ['abcdefghijklmnopqrstuvwxyz'];
var bigCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var passwordLength = 8;
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Functions//
// create function to receive user data //
function receiveUserInput() {
  empty = []; // this is called to set back to empty
  passwordLength = window.prompt("Choose a password length (Must be between 8 and 128 characters!)");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Must enter a number between 8 and 128!");
    return;
  }

  // create a confirm box for lowercase letters
  if (window.confirm("Do you want to include lowercase letters?")) {
    empty = empty + lowCase;
  }

  // create a confirm box for uppercase letters
  if (window.confirm("Do you want to include uppercase letters?")) {
    empty = empty + bigCase;
  }

  // create a confirm box for numeric characters
  if (window.confirm("Do you want to include numbers?")) {
    empty = empty + num;
  }

  // create a confirm box for special characters
  if (window.confirm("Do you want to include special characters?")) {
    empty = empty + specCharacters;
  }
  return true;  // must return true to end the function
}

// generate password in the #password input
function writePassword() {
  receiveUserInput();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var userPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var character = Math.floor(Math.random() * empty.length);
    userPassword = userPassword + empty[character];
  }
  return userPassword;
}

