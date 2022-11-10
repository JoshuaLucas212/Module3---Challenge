// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const generatePassword = () => {
  let length = prompt("Enter the number of characters you want for the password. (8 min - 128 max)");
  var typeUpper = prompt(
    "Do you want it to contain uppercase letters? (enter y or press ok for no): "
  );
  var typeLower = prompt(
    "Do you want it to contain lowercase letters? (enter y or press ok for no): "
  );
  var typerSpecialCharacters = prompt(
    "Do you want it to include special characters? (enter y or press ok for no): "
  );
  var numeric = prompt(
    "Do you want it to include numbers? (enter y or press ok for no): "
  );
  if (length >= 8 && length < 128) {
    var password = "";
    var characters = "";
    var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    var numericCharacters = "0123456789";
    var specialCharacters = "!@#$%^&*()";

    if (typeUpper === "y") {
      characters += upperCharacters;
    }
    if (typeLower === "y") {
      characters += lowerCharacters;
    }
    if (numeric === "y") {
      characters += numericCharacters;
    }
    if (typerSpecialCharacters === "y") {
      characters += specialCharacters;
    }

    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * characters.length);

      password =
        password + characters.substring(randomNumber, randomNumber + 1);
    }
    return password;
  } else {
    alert("please choose a number between 8-128, for password to generate");
  }
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
