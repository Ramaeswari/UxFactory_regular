/*function reverseStringAndJoin(input)
{
    var stringArray = input.split("");
    var reverseString = stringArray.reverse();
    return reverseString.join("#");
}
let result = reverseStringAndJoin("HTML");
console.log(result);
*/
// function reverseStringAndJoin1(str)
// {
//     var reverseStr = "";
//     for(i = str.length - 1; i >= 0; i--)
//     {
//         reverseStr = reverseStr + str[i];
//     }
//     return reverseStr.join("@");
// }
// let result1 = reverseStringAndJoin1("HTML");
// console.log(result1);

//converting roman numbers to integers
function arabic(str)
{
 if(str === "")
 {
  return "";
 }
 var number = character(str.charAt(0));
 var cur_pos, pre_pos;
 for(var i = 1; i < str.length; i++)
 { 
  cur_pos = character(str.charAt(i));
  pre_pos = character(str.charAt(i + 1));
  if(cur_pos <= pre_pos)
  {
   number += cur_pos;
  }
  else
  {
    number = number - (pre_pos * 2) + cur_pos;
  }
 }
 return number;
}
function character(char)
{
 switch(char)
 {
  case 'I': return 1;
  case 'v': return 5;
  case 'X': return 10;
  case 'L': return 50;
  case 'C': return 100;
  case 'D': return 500;
  case 'M': return 1000;
  default: return "";
 }
}
let value = arabic("III");
console.log(value);

//
var romanNum = new Array();
romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
// decimal number
var dNum = new Array();
dNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
function decimalRoman(value) {
   if (value <= 0 || value >= 4000)
      return value;
      var romanNumeral = "";
   for (var i = 0; i<romanNum.length; i++) {
      while (value >= dNum[i]) {
         value -= dNum[i];
         romanNumeral += romanNum[i];
      }
   }
   return romanNumeral;
}
var val = decimalRoman(483);
console.log(val);