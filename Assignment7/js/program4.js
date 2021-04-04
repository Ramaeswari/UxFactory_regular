function getTotalCount(input1)
{
    // console.log(input1);
    return input1.birds + input1.animals;
}
var result = getTotalCount({birds: 6, animals: 0});
console.log(result);
var result1 = getTotalCount({birds: 2, animals: 7});
console.log(result1);