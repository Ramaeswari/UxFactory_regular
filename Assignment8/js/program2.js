function multiplyByLength(array)
{ 
    for(i = 0; i < array.length; i++)
    {
        array[i] = array[i] * array.length;
    }
    return array;
}
var result1 = multiplyByLength([2, 3, 1, 0]);
console.log(result1);