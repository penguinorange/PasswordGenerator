// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowCase = "qwertyuiopasdfghjklzxcvbnm" .split("")
var upCase = "QWERTYUIOPASDFGHJKLZXCVBNM"  .split("")
var numCase = "123456789" .split("")
var specCase = "!@#$%^&*" .split("")
    console.log(lowCase)
    console.log(upCase)
    console.log(specCase)
    console.log(numCase)







// // Write password to the #password input
function writePassword() {

  var conLow = confirm("Would you like lower case letters in your password?")
  var conUpp = confirm("Would you like uppercase characters in your password?")
  var conNum = confirm("Would you like numbers in your password?")
  var conSpec = confirm("Would you like special characters in your password?")
      console.log(conLow)
      console.log(conUpp)
      console.log(conNum)
      console.log(conSpec)
  
  var pwCriteria = []
  var pwordArr = []
  
  while (conLow === false && conUpp === false && conNum === false && conSpec === false)
   {
      alert("You must agree to at least one criteria!")
      var conLow = confirm("Would you like lower case letters in your password?")
      var conUpp = confirm("Would you like uppercase characters in your password?")
      var conNum = confirm("Would you like numbers in your password?")
      var conSpec = confirm("Would you like special characters in your password?")
      console.log(conLow)
      console.log(conUpp)
      console.log(conNum)
      console.log(conSpec)
  
  }
   
  var pwLength = prompt("Pick a number between 8 and 128 for the character length of your password")
  console.log(pwLength)
  while (pwLength < 8 || pwLength > 128) {
    alert("You must enter a value between 8 and 128!")
    var pwLength = prompt("Pick a number between 8 and 128 for the character length of your password")
  console.log(pwLength)
  }

  var password = generatePassword();
  


  
  function generatePassword() {
    if (conLow === true) {
      var pwCriteria1 = pwCriteria.concat(lowCase) 
      console.log(pwCriteria1)
    }
    if (conUpp === true) {
      var pwCriteria2 = pwCriteria.concat(upCase) 
      console.log(pwCriteria2)
    }
    if (conNum === true) {
      var pwCriteria3 = pwCriteria.concat(numCase) 
      console.log(pwCriteria3)
    }
    if (conSpec === true) {
      var pwCriteria4 = pwCriteria.concat(specCase) 
      console.log(pwCriteria4)
    }
    var pwCriteria5 = pwCriteria.concat(pwCriteria1, pwCriteria2, pwCriteria3, pwCriteria4)
    console.log(pwCriteria5)
    
    var i;
  
  for (i = 0; i < pwLength; i++) {
    var randoChar = pwCriteria5[Math.floor(Math.random()*pwCriteria5.length)]
    console.log(randoChar)
    pwordArr.push(randoChar[0])
    
  }
    console.log(pwordArr)
    var passwordCommas = pwordArr.toString();
    console.log(passwordCommas)
    var password = passwordCommas.replace(/,/g, "");
    console.log(password)

    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
