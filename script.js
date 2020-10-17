

// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specail = ["!", "@", "#", "$", "%", "^","&","*","+"];


function userPrompt() {

    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 7 but less than 128.");
    console.log(passwordLength)

    if (passwordLength < 8 || passwordLength > 128)
        alert("your password must be between 8-128 or characters in length");
    passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 7 but less than 128.");
    console.log(passwordLength);
    

        var upperContain = confirm("Do you want uppercases in your password?");
    
        var lowerContain = confirm("Do you want to lowercase characters in your password");
    
        var numbersContain = confirm("Do you want numbers characters in your password?");

        var specialContain = confirm("Do you want special characters in your password?");
    

    var userInput = {
        passwordLength: passwordLength,
        upperContain: upperContain,
        lowerContain: lowerContain,
        numbersContain: numbersContain,
        specialContain: specialContain,
    };

    return userInput;

}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;    
    
    while (0 !== currentIndex) 
        
        randomIndex = Math.floor(Math.random() * currentIndex); currentIndex -= 1;

        temporaryValue = array[currentIndex.randomIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    

    return array;
    }
        
function generatePassword() {
        


    var inputs = userPrompt()
    var result = [];
    var potentialChars = [];
  


    if (inputs.upperContain) {
        potentialChars = potentialChars.concat(upper);
  
    }

       

    if (inputs.lowerContain) {
        potentialChars = potentialChars.concat(lower);

        // console.log(lower)
    }
       

    if (inputs.numbersContain) {
        potentialChars = potentialChars.concat(number);

        // console.log(number)
    }
       

    if (inputs.specialContain) {
        potentialChars = potentialChars.concat(specail);
        
        console.log(specail)

    }

    var randomizedArray = shuffle(potentialChars);
   
    for (var i = 0; i < inputs.passwordLength.length; i++) {result.push(randomizedArray[i])
        console.log(results);
    }
    return (results.join(''));
}

    


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

