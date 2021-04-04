function evenAndOddArray(arr)
{
    var oddArray = [];
    var evenArray = [];
    var j = 0, k = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 === 0)
        {
            evenArray[j] = arr[i];
            j++;
        }
        else
        {
            oddArray[k] = arr[i];
            k++;
        }
    }
    return `${evenArray} \n ${oddArray}`;
}
var result = evenAndOddArray([12, 5, 7, 10, 1]);
console.log(result);