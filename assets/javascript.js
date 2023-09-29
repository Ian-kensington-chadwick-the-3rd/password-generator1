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


