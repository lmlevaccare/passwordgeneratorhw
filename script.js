// Assignment Code
var generateBtn = document.querySelector("#generate");
// you will need to name some variables up here before you get started writing the functions.

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specail = ["!", "@", "#", "$", "%", "^","&","*","+"];
var emptyArray= []


function generatePassword() {

    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 7 but less than 128.");
    console.log(passwordLength)

    if (passwordLength < 8 || passwordLength > 128)
        alert("your password must be between 8-128 or characters in length");
    passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 7 but less than 128.");
    console.log(passwordLength)
    

    var lower = confirm("Do you want to lowercase characters in your password");
    console.log(lower)
    var upper = confirm("Do you want uppercases in your password?");
    console.log(upper)
    var numbers = confirm("Do you want numbers characters in your password?");
    console.log(numbers)
    var special = confirm("Do you want special characters in your password?");
    console.log(special)

    if (lower === true) {
        emptyArray.concat(lower);
    }

    if (upper === true) {
        emptyArray.concat(upper);
       
    }
    
    if (numbers === true) {
        emptyArray.concat(numbers);
   
    }
    
    if (special === true) {
        emptyArray.concat(special);
        
    }

    for (var i = 0; i < passwordLength.length; i++)
    
    {
        var cHARIndex = Math.floor(Math.random() * emptyArray.length)
     
        var cHARGuess = emptyArray[cHARIndex];
        

        placearray.push(cHARGuess)
       
        placearray.toString();
        return placearray
   
    }


        return [];
    }
} 


  // Lauren's Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
