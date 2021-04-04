function checkEligibilityOfVoting(age)
{
    if(age >= 18)
    {
        return true;
    }
    return false;
}
var result = checkEligibilityOfVoting(17);
console.log(result);
var result1 = checkEligibilityOfVoting(19);
console.log(result1);