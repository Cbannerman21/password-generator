// Assignment code here

//writing functions to produce uppercase, lowercase, special characters, and numbers for the pasword generator.
//using math round to round to the nearest whole number instead of math floor to make randomization more effective.
function getRandomLowercaseLetter() {
    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return lowerCase[Math.round(Math.random() * lowerCase.length)];
}

function getRandomUpperCaseLetter() {
    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return upperCase[Math.round(Math.random() * upperCase.length)];
}

function getRandomSpecialCharacter() {
    var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+', '?'];
    return specChar[Math.round(Math.random() * specChar.length)];
}

function getRandomNumber() {
    var number = ['1','2', '3', '4', '5', '6', '7', '8', '9', '0'];
    return number[Math.round(Math.random() * number.length)];
}
// added variables for the confirmation messages when creating the password.
var upperCaseConfirm = function() {
    var c = confirm("If you'd like to use uppercase letters press ok.")
    if (c == true) {
        return true;
    }
    else {
        return false;
    }
}

var lowerCaseConfirm = function() {
    var c = confirm("If you would like to use lowercase letters press ok.")
    if (c == true) {
        return true;
    }
    else {
        return false;
    }
}
var specCharConfirm = function() {
    var c = confirm("If you would like to use special characters press ok.")
    if (c == true) {
        return true;
    }
    else {
        return false;
    }
}

    var numberConfirm = function() {
        var c = confirm("If you would like to use numbers press ok.")
        if (c == true) {
            return true;
        }
        else {
            return false;
        }
    }

    function generatePassword() {
        var length = getPasswordLength();
        var lowerCon = lowerCaseConfirm();
        var upperCon = upperCaseConfirm();
        var specCharCon = specCharConfirm();
        var numberCon = numberConfirm();
        let password = '';
        if (lowerCon == false && upperCon == false && numberCon == false && specCharCon == false) {
            return password = "You must select one type of character, please select again.";
        }
        else {
            while (password.length < length) {
                var getType = Math.round(Math.random() * 6)
                switch (getType) {
                    case 1:
                        if (lowerCon == true) {
                            password += getRandomLowercaseLetter();
                        }
                        break;
                    case 2:
                        if (upperCon == true) {
                            password += getRandomUppercaseLetter();
                        } 
                        break;   
                    case 3:
                        if (specCharCon == true) {
                            password += getRandomSpecialCharacter();
                        }    
                        break;
                    case 4:
                        if (numberCon == true) {
                            password += getRandomNumber();
                        }
                        break;
                    default:
                        console.log("error");
                        break;
                }
            }
            if (password.length === length) {
                return password;
            }
        }
    }

    var getPasswordLength = function() {
        var passwordLength = "";
        var parseLength;

        while (passwordLength == "" || passwordLength == null) {
            passwordLength = prompt("How many characters would you like your password to be? Choose a number between 8 and 128 characters.");
        }
        parseLength = parseInt(passwordLength);
        if (parseLength > 7 && parseLength < 129) {
            return parseLength;
        }
        else {
            window.alert("Please enter a number within the valid range.");
            getPasswordLength();
        }
    }
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