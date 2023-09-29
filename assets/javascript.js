var characterLength = 8;
var choiceArr = [];
var numericArr=["0","1","2","3","4","5","6","7","8","9"];
var lowerCaseArr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var upperCaseArr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var specialCharArr= ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-","=","?"];


// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");
    if (correctPrompts){
     var newPassword = generatePassword();
     passwordText.value = newPassword;
    } else {
     passwordText.value="";
    }
   }
   // this function runs a for loop that loops through our whole array to find generate our password
   function generatePassword(){
     var password = "";
     for(var i = 0; i < characterLength; i++){
     var randomIndex = Math.floor(Math.random() * choiceArr.length)
   password = password + choiceArr[randomIndex];
     }
     return password;
   }
    
   
   
// the getPrompts function runs a list of ifs and returns all the values that chosen
function getPrompts(){
    choiceArr= []
 
 // the pars int turns string to integer
 characterLength = parseInt(prompt("How many characters do you want your password to be(8 - 128"));
   
    
   if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
     alert("pick a number between 8 - 128 digits. try again")
     return false;
   }  // concat combines arrays
    if (confirm("Would you like uppercase letters in your password")){
          choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("Would you like lowercase letters in your password ")){
        choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if (confirm("Would you like uppercase letters in your password")){
        choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("Would you like numbers in your password")){
        choiceArr = choiceArr.concat(numericArr);
    }
    return true;
}












// 1.pull up promt to ask user if they want a password
// 2.does user want numbers 
// 3.does user want specialCharArr 
// 4.does user want lowerCaseArr 
// 5. does user want upperCaseArr 
// 6.what if user pick none of the above 
// 7. if everything is true generate password 
