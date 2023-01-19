const alphaCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numberCharacters = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passOneEl = document.getElementById("password1")
let passTwoEl = document.getElementById("password2")
let passLength = 15

// Add event listener to the generate button
document.getElementById("gen-pass").addEventListener("click", function(event){
    event.preventDefault();
    generate();
});

// Function to generate the password
function generate() {
  // Array to store the characters to include in the password
  let charactersOne = [], charactersTwo =[];
  
  // Check if the uppercase letters option is selected
  if (document.getElementById("cap-letters").checked) {
    charactersOne = charactersOne.concat(alphaCharacters);
    charactersTwo = charactersTwo.concat(alphaCharacters);
  }

  // Check if the lowercase letters option is selected
  if (document.getElementById("low-letters").checked) {
    charactersOne = charactersOne.concat(lowerCharacters);
    charactersTwo = charactersTwo.concat(lowerCharacters);
  }

  // Check if the numbers option is selected
  if (document.getElementById("num-letters").checked) {
    charactersOne = charactersOne.concat(numberCharacters);
    charactersTwo = charactersTwo.concat(numberCharacters);
  }

  // Check if the special characters option is selected
  if (document.getElementById("spe-letters").checked) {
    charactersOne = charactersOne.concat(specialCharacters);
    charactersTwo = charactersTwo.concat(specialCharacters);
  }
  
  // Shuffle the characters in the array
  charactersOne = shuffleArray(charactersOne);
  charactersTwo = shuffleArray(charactersTwo);

  // Trim the array to the desired length
  charactersOne = charactersOne.slice(0, passLength);
  charactersTwo = charactersTwo.slice(0, passLength);

  // Convert the array to a string and set it as the value of the generated password input
    passOneEl.value = charactersOne.join("");
    passTwoEl.value = charactersTwo.join("");
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Add event listener to the first generated password input
passOneEl.addEventListener("click", copyPassword);
passTwoEl.addEventListener("click", copyPassword);

// Function to copy the password to the clipboard
function copyPassword() {
  // Select the text in the input
  this.select();

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Show a message to indicate that the password was copied
  alert("Password copied to clipboard!");
}