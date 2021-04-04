function palindrome(input)
{
    var temp = input;
    var sum = 0;
    while(input > 0)
    {
        var reminder = input % 10;
        sum = (sum * 10) + reminder;
        input = parseInt(input / 10);
    }
    // console.log(sum);
    if(sum == temp)
    {
        return "Its a palindrome number"
    }
    else
    {
        return "Its not a palindrome";
    }
}
let result = palindrome(103);
console.log(result);


function checkPalindrome(str) 
{
    const array = str.split('');
    const reverseArray = array.reverse();
    const reverseString = reverseArray.join('');
    if(str == reverseString) {
        return 'It is a palindrome';
    }
    return 'It is not a palindrome';
}

//take input
const string = checkPalindrome("121");
console.log(string);