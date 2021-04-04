function divisibleByThree(input)
{
    if(input % 3 == 0)
    {
        return true;
    }
    return false;
}
var result = divisibleByThree(9);
console.log(result);
var result1 = divisibleByThree(13);
console.log(result1);