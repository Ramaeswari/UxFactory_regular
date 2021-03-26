//implict conversions
var number = 1236;
console.log(typeof number);
var str = "546";
console.log(typeof str);
//explicit conversion
var bool = Number(true);
console.log(bool, typeof bool);

var num = Boolean(0);
console.log(num, typeof num);

var text = String(123);
console.log(text, typeof text);

//try, catch, finally
try
{
    myFunction();
}
catch(error)
{
    console.error("Undefined Function is calling");
}
finally
{
    console.log("Whether the error occured or not finally block is excuted");
}

//try catch finally
try
{
    evenOddFunction(6);
}
catch(error)
{
    console.error("When the error is occured in try block, that error can be handled in this catch block");
}
finally
{
    console.log("Finally block is excuted");
}

function evenOddFunction(a)
{
    if(a % 2 == 0)
    {
        console.log("Even Number");
    }
    else
    {
        console.log("Odd Number");
    }
}

/*
//throw 
var num = -20;
if(num > 0)
{
    throw "Number is positive";
}
else if(num < 0)
{
    throw "number is Negative";
}
else
{
    console.log("Number is zero");
}*/

//scopping
var x = 10;
console.log("x value is: ", x);
function sum()
{
    var y = 20;
    var sum = x + y;
    console.log("Sum is: ", sum);
}
sum();
// var diff = x - y;
// console.log("Difference is: ", diff);

//this keyword
var number1 = 100;
function exampleFunction()
{
    var number1 =300;
    console.log(number1);
    console.log(this.number1);
}
exampleFunction();
/*
var obj1 = new exampleFunction();
var obj2 = new exampleFunction();
console.log(obj1.number1);
obj2.number1 = 600;
console.log(obj2.number1);*/

//debugging
var x = 20;
// The debugger keyword stops the execution of JavaScript, and calls
// the debugging function. 
debugger;
console.log(x);

//hoisting
ageCheckForVote(20);
function ageCheckForVote(age)
{
    if(age >= 18)
    {
        console.log("Eligible for vote");
    }
    else
    {
        console.log("Not Eligible for vote");
    }
}

console.log(value);
var value = 522;


//difference between replace() and replaceAll()
var str = "white pet dog is nice and pink pet dog is cute";
console.log(str.replace("pet", "pets"));

console.log(str.replaceAll("pet", "petDogs"));