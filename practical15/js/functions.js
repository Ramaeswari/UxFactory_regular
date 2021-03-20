//function for non-parametarized function
function addition()
{
    var a = 10, b =20, c = 30;
    var sum = a + b + c;
    return sum;
}
var val = addition();
console.log(val);

//function for division
function division(a, b)
{
    var div = a / b;
    return div;
}
var value = division(20, 10);
console.log(value);

//function for modules
function modules(x, y)
{
    var mod= x % y;
    return mod;
}
var value1 = modules(20, 10);
console.log(value1);

//inbuild methods
var number = 522;
console.log(typeof number.toString());

var number1 = 166.5236425;
console.log(number1.toFixed(3));

var str = "eswari";
console.log(str.length);        //it gives string legth

console.log(str[5]);            //it gives the character at 5th position

console.log(str.charAt(4));     //it gives character at position at 4

console.log(str.substring(2));
