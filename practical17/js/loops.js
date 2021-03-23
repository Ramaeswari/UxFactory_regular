//if condition
var age = 22;
if(age >= 18)
{
    console.log("Eligible for vote");
}
else
{
    console.log("Not Eligible for vote");
}

var studentName = "rama";
if(studentName == 'chandini' || studentName == 'eswari' || studentName =='rajesh' || studentName =='anil' || studentName == 'jagadeesh')
{
    console.log("This is student is taking training in uxfactory");
}
else
{
    console.log("That student is not for uxfactory");
}

//switch statement
switch(studentName)
{
    case 'eswari':
    case 'chandini':
    case 'rajesh':
    case 'anil':
    case 'jagadeesh':
        console.log("This student is taking training in uxfactory");
        break;
    default:
        console.log("That student is not for uxfactory");
}

//for loop
var array = [1, 2, 3, 4, 5, 6];
var sum = 0;
for(var i = 0; i < array.length; i++)
{
    sum = sum + array[i];
}
console.log("sum is: ", sum);

//while loop
var arr = [10, 20, 30, 40];
var sum = 0;
var i=0;
while(i < arr.length)
{
    sum= sum + arr[i];
    i++; 
}
console.log(sum);

//do while loop
var i = 0;
var sum=0;
var array1 = [6, 7, 8, 9, 10];
do
{
    sum = sum + array1[i];
    console.log(sum);
    i++;
}
while(i < array1.length)