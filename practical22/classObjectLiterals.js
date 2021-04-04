//template string
var x = 10;
console.log("The sum is a = ", x);
console.log(`The value of a is a = ${x}`);

//class
class ArithmaticOperators
{
    constructor(a, b, name)
    {
        this.input1 = a;
        this.input2 = b;
        this.operation = name 
    }
    getSum()
    {
        return `The sum is ${this.input1 + this.input2}`;
    }
    getSub()
    {
        return `The subtraction is ${this.input1 - this.input2}`;
    }
}
var object = new ArithmaticOperators(5, 5, "sum");
console.log(object.getSum());

//object literals
function studentDetails(name, age)
{
    return {
        name,
        age
    }
}
let studentObj1 = new studentDetails("eswari", 22);
console.log(studentObj1.age);

let studentObj2 = new studentDetails("rama", 25);
console.log(studentObj2.name);

//method in objects
function getStudentDetails(name, age, job)
{
    return {
        getName()
        {
            return `Student name: ${name}`;
        },
        getAge()
        {
            return `Student age: ${age}`;
        },
        getJob()
        {
            return `Student job: ${job}`;
        }
    }
}
let obj = new getStudentDetails("eswari", 23, "Developer").getJob();
console.log(obj);

var names = "student"
var i = 0;
let students = {
    [names + ++i]: "Eswari",
    [names + ++i]: "Chandini",
    [names + ++i]: "Jagadeesh",
    [names + ++i]: "Anil",
    [names + ++i]: "Rajesh"
};
console.log(students);

//destructuring
let personDetails = {
    perName: "eswari",
    age: 23,
    country: "India",
    personId: 20
};
console.log(personDetails.perName,personDetails.age);
let {perName, age, personId} = personDetails;
console.log(perName, age, personId);

let {perName: pN, personId: pId, personJob: job = "Developer"} = personDetails;
console.log(pN, pId, job);

//spread operator
const arr = [10, 20, 30, 40];
const arr1 = [50, 60, 70, 80];
const arr2 = [...arr, ...arr1];
console.log(arr2);

console.log(Math.max(...arr2));

//rest operator
function getSum(...array)
{
    return array;
}
let getSumObj = new getSum([1, 2, 3, 4], [6, 7, 8, 9], [10, 11, 12, 13, 14, 15]);
console.log(getSumObj);