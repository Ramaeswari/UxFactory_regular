function add(input)
{
    var splitResult = input.split("+");
    return parseInt(splitResult[0]) + parseInt(splitResult[1]);
}
var result = add("102+17");
console.log(result);

