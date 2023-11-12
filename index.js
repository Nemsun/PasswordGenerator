

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/"];
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let alphaLowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" ,"l", "m", "n", "o", "p", "q", "r", "s", "t", "u" ,"v", "w", "x", "y", "z"];
let alphaUpperCharacters = alphaLowerCharacters.map(function(x){return x.toUpperCase()});

let allCharacters = specialCharacters.concat(numericCharacters, alphaLowerCharacters, alphaUpperCharacters);

function generatePassword() {
    let password = "";
    let passwordEl = document.getElementById("password");
    let length = getRandomLength();
    for (let i = 0; i< length; i++) {
        let index = getRandomElement();
        password += allCharacters[index];
    }
    passwordEl.textContent = password;
    console.log(length)
}

function getRandomLength() {
    let length = Math.floor(Math.random() * 12) + 1;
    if (length < 8) {
        return 8;
    }
    return length
}

function getRandomElement() {
    return Math.floor(Math.random() * allCharacters.length);
}