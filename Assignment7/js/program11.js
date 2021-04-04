function checkNumber(input1, input2)
{
    if(input1 % input2 == 0)
    {
        return true;
    }
    return false;
}
let result = checkNumber(2, 3);
console.log(result);
let result1 = checkNumber(21, 3);
console.log(result1);