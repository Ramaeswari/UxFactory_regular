//array helper functions

//for each
var animals = ["cat", "elephant", "lion", "tiger"];
animals.forEach(val =>
    {
        console.log(val);
    }
);

//map function
var mapFunction = animals.map(val => val.toUpperCase());
console.log(mapFunction);

//filter function
var values = [22, 36, 60, 73, 7, 18, 15, 12];
var filterResult = values.filter(val => val > 8 && val < 23);
console.log(filterResult);

//find
var people = [
    {name: "eswari", age: 23},
    {name: "chandini", age: 45},
    {name: "jagadeesh", age: 30},
    {name: "anil", age: 32},
    {name: "rajesh", age: 20},
];

var findResult = people.find(person => person.age < 25);
console.log("The person with leesthan 25 age is : ", findResult)

//every function
var everyResult = people.every(person => person.age <= 20 && person.age > 40);
console.log("Te result of every function : ", everyResult);

//some
var someResult = people.some(person => person.age < 30);
console.log(someResult);

//reduce
var arr = [10, 20, 30, 40, 50];
function add(iterator, value)
{
    // console.log(iterator, value);
    return iterator + value;
}

console.log("The sum of elements is: ",arr.reduce(add, 0));


