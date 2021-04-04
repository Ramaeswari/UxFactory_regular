function sumArray(arr)
{
    var array = [];
    // var sum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        var sum = 0;
        for(var j = 0; j < arr[i].length; j++)
        {
            sum += arr[i][j];
            
        }
        array[i] = sum;
    }
    return array;
}
var result = sumArray([[1, 2, 3], [1, 3, 4]]);
console.log(result);