function add()
{
    var a = 10;
    let b = 30;
    const c = 40;
    //defining block 
    {
        //let and const are block level scope then it prints 50, 60 
        var a = 20;
        let b = 50;
        const c = 60;
        console.log("a = ", a);
        console.log("b = ", b);
        console.log("c = ", c);
    }
    //var is function level scope so it takes 10
    console.log("a = ", a);
    console.log("b = ", b);
    console.log("c = ", c);
}
add();

//arrow functions
const sum=(a,b) => a + b;
var value = sum(10, 20);
console.log(value);

let diff=(a, b, c, d = 10) =>
{
    return a - b - c - d;
}
var result = diff(60, 30, 10 , 20);
console.log("Difference is : " , result);

//function
let example = (x) =>
{
    if(x > 10)
    {
        // for(var i = 1; i <= 10; i++)
        // {
        //     console.log(x);
        // }
        return x * 10;
    }
    else
    {
        // for(var i = 1; i <= 2 ; i++)
        // {
        //     console.log(x);
        // }
        return 2 * x;
    }
}
var result1 = example(12);
console.log(result1);

// Write a function round100 that rounds a number to the nearest hundred.

function round100(input)
{
return Math.round(input / 100)*100;
}
var value = round100(1789);
console.log(value);
