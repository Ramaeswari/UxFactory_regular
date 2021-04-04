function checkElements(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 === 0)
        {
            console.log(`${arr[i]} is divided by 2`);
        }
        else
        {
            console.log(`${arr[i]} is not divided by 2`);
        }
    }
}
checkElements([6, 99, 10]);
