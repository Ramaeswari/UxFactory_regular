function checkNumber(number)
{
    if(number % 2 == 0)
    {
        console.log("Number is even");
        if(number < 10)
        {
            return "Its less than 10";
        }
        else
        {
            return "Its not less than 10";
        }
    }
    return false;
}
let result = checkNumber(12);
console.log(result);
let result1 = checkNumber(7);
console.log(result1);
let result2 = checkNumber(6);
console.log(result2);

