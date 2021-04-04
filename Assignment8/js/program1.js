function sumAndAverage(array)
{
    var sum = 0;
    for(i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    return `Sum: ${sum} \n Average: ${sum / array.length}`; 
}
var result = sumAndAverage([10, 20, 30, 40]);
console.log(result);