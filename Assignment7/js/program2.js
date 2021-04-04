function operate(num1, num2, operator)
{
    switch(operator)
    {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        case '%':
            return num1 % num2;
            break;
        default:
            return `Enter the correct operator`;
    }
}
var result = operate(10, 20, '-');
console.log(result);
var result1 = operate(6, 4, '+');
console.log(result1);
