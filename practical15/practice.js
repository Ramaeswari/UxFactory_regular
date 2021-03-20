//variable declaration
var value1 = 20;
var value2 = 10;
// Arithmatic operators
var sum = value1 + value2;

var diff = value1 - value2;
var mul = value1 * value2;
var div = value1 / value2;
console.log(diff);

//comparison operators
//<, >, <=, >=, ==, ===, !=
console.log(value1 < value2);

//Logical operators
console.log(value1 > value2 && value2 == value1);

//Ternary Operators
var age = 20;
var eligibleForVote, notEligibleForVote;
var checkAgeForVote = age > 18 ? "eligibleForVote" : "notEligibleForVote";
console.log(checkAgeForVote);

//function
function add(a, b)
{
    var sum= a + b;
    console.log("sum is ", sum);
    return sum;
}
var val=add(20,30);
console.log(val);