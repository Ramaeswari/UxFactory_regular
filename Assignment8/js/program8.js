function findLargestNumber(arr)
{
    return Math.min(...arr);
}
var result = findLargestNumber([50, 67, 45]);
console.log(result);