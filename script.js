// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var choices = "";

function generatePassword() {
  var password = "password";
  // TODO: add code to generate the password here
  let length = prompt("How many characters do you want in your password? Between 8 and 128");
  
  if (length === ""){
    alert("You have to choose a number");
  }else if( length < 8 || length > 128 ) {
      alert("You have to choose a number that between 8 and 128");
  }else {
     var incluNum =  window.confirm("Would you like numbers in your password?");
     if(incluNum === true){
       choices = choices.concat(numbers);
     }
     var incluUpper =  window.confirm("Would you like uppercase in your password?");
     if(incluUpper === true){
       choices = choices.concat(uppercase);
     }
     var incluLower =  window.confirm("Would you like lowercase in your password?");
     if(incluLower === true){
       choices = choices.concat(lowercase);
     }
     var incluSpecial =  window.confirm("Would you like special characters in your password?");
     if(incluSpecial === true){
       choices = choices.concat(specialChars);
     }
    
     if (choices === ""){
       return password;
     }

     password = "";
     for (let i = 0 ; i < length ; i++){
      password = password.concat(choices[Math.floor(Math.random() * choices.length)])
    }
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
