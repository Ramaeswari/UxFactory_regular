//startsWith method
var str = "Rama eswari"
console.log(str.startsWith('Ra'));
console.log(str.startsWith('n', 8));

//tostring method
var text = 123;
console.log(typeof text);
console.log(typeof text.toString());
var num = "456";
console.log(typeof Number(num));

//toLowerCase method
var exampleText = "JAvaSCript Is StarTEd FOr OUr BAtch";
console.log(exampleText.toLowerCase());
//toUpperCase method
var exampleText1 = "javascript is started for our batch";
console.log(exampleText1.toUpperCase());

//trim method
var exampleText2 = " Rama   eswari   ";
console.log(exampleText2.trim());

//trimEnd method
console.log(exampleText2.trimEnd());

//trimStart method
console.log(exampleText2.trimStart());

//valueOf method
var text = "javascript";
console.log(text.valueOf());

//split method
var exampleTxt = "javascript is started for our batch";
console.log(exampleTxt.split(' '));         //those stored in an array
var arr = exampleTxt.split(' ');
console.log(arr[2]);

console.log(exampleTxt.split(''));
var charArray = exampleTxt.split('');
console.log(charArray[6]);

var nameText = "ramaeswari";
console.log("Reverse String: ", nameText.split('').reverse().join(''))

//number methods
var number = 522;
console.log(typeof number.toString());

var number1 = 166.5236425;
console.log(number1.toFixed(3));

//isInteger
// var number2 = 65854;
console.log(Number.isInteger(56));
