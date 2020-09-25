
var generateBtn = document.querySelector("#generate");

var lowCase = "qwertyuiopasdfghjklzxcvbnm" .split("")
var upCase = "QWERTYUIOPASDFGHJKLZXCVBNM"  .split("")
var numCase = "123456789" .split("")
var specCase = "!@#$%^&*" .split("")

function writePassword() {

  var conLow = confirm("Would you like lower case letters in your password?")
  var conUpp = confirm("Would you like uppercase characters in your password?")
  var conNum = confirm("Would you like numbers in your password?")
  var conSpec = confirm("Would you like special characters in your password?")
  
  var pwCriteria = []
  var pwordArr = []
  
  while (conLow === false && conUpp === false && conNum === false && conSpec === false)
   {
      alert("You must agree to at least one criteria!")
      var conLow = confirm("Would you like lower case letters in your password?")
      var conUpp = confirm("Would you like uppercase characters in your password?")
      var conNum = confirm("Would you like numbers in your password?")
      var conSpec = confirm("Would you like special characters in your password?") 
  }
   
  var pwLength = prompt("Pick a number between 8 and 128 for the character length of your password")

  while (pwLength < 8 || pwLength > 128) {
    alert("You must enter a value between 8 and 128!")
    var pwLength = prompt("Pick a number between 8 and 128 for the character length of your password")
  }

  var password = generatePassword();
  
  function generatePassword() {
    if (conLow === true) {
      var pwCriteria1 = pwCriteria.concat(lowCase) 
    }

    if (conUpp === true) {
      var pwCriteria2 = pwCriteria.concat(upCase) 
    }

    if (conNum === true) {
      var pwCriteria3 = pwCriteria.concat(numCase) 
    }

    if (conSpec === true) {
      var pwCriteria4 = pwCriteria.concat(specCase) 
    }

    var pwCriteria5 = pwCriteria.concat(pwCriteria1, pwCriteria2, pwCriteria3, pwCriteria4)
    
    var i;
  
  for (i = 0; i < pwLength; i++) {
    var randoChar = pwCriteria5[Math.floor(Math.random()*pwCriteria5.length)]
    pwordArr.push(randoChar[0])   
  }

    var passwordCommas = pwordArr.toString();
    var password = passwordCommas.replace(/,/g, "");
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);
