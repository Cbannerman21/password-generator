// Assignment code here
function getRandomLowercaseLetter() {
    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return lowerCase[Math.round(Math.random() * lowerCase.length)];
}

function getRandomUpperCaseLetter() {
    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return upperCase[Math.round(Math.random() * upperCase.length)];
}

function getSpecialCharacter() {
    var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+', '?'];
    return specChar[Math.round(Math.random() * specChar.length)];
}

function getNumber() {
    var number = ['1','2', '3', '4', '5', '6', '7', '8', '9', '0'];
    return number[Math.round(Math.random() * number.length)];
}

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