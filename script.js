// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Prompts that come up after you click generate password
function generatePassword() {
    
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 7 but less than 128.");

    if (passwordLength < 8)
        alert("your password will be 8 or more characters in length");
    
    var lowerCases = confirm("Do you want lowercases in your password?");

    var upperCases = confirm("Do you want uppercases in your password?");

    var special = confirm("Do you want special characters in your password?");

    var numbers = confirm ("Do you want numbers characters in your password?")

       var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*=+",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function getRandomValues()






    





