function checkNumber(input1, input2)
{
    let sum = input1 + input2;
    if(Math.sqrt(sum) % 2 == 0)
    {
        return "even";
    }
    return "odd";
}
let result = checkNumber(2, 3);
console.log(result);
let result1 = checkNumber(1, 3);
console.log(result1);