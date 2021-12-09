// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var result = [];




generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passwordLength = window.prompt("How long do you want your password? (must be between 8-128)");
    if (!passwordLength || passwordLength < 8 || passwordLength >= 128) {
        window.alert("this is an invalid response");
        generatePassword();
      }

    var userLowercase = window.confirm("Do you want lowercase letters?");
    if (userLowercase === true) {
        for (var i = 0; i <passwordLength; i++)
        result[i] = [Math.floor(Math.random() * lowercase.length)]
        console.log(result);
    }

    var userUppercase = window.confirm("Do you want uppercase letters?");
    if (userUppercase === true) {
        for (var i = 0; i <passwordLength; i++)
        result[i] = [Math.floor(Math.random() * uppercase.length)]
        console.log(result);
    }

    var userNumeric = window.confirm("Do you want numbers?");
    if (userNumeric === true) {
        for (var i = 0; i <passwordLength; i++)
        result[i] = [Math.floor(Math.random() * numeric.length)]
        console.log(result)
    }

    var userSpecial = window.confirm("Do you want special characters?");
    if (userSpecial === true) {
        for (var i = 0; i <passwordLength; i++)
        result[i] = [Math.floor(Math.random() * special.length)]
        console.log(result);
    }
    // return result.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password; 


  }
 


