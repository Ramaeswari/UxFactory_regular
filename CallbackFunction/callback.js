// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }
// // callback function
// function callMe() {
//     console.log('hai uxfactory');
// }
// // passing function as an argument
// greet('Eswari', callMe);


// //asynchronous callback
// function later() {
//     console.log('later() called');
// }
// console.log('starts');
// setTimeout(later, 2000);
// console.log('completed');

// var one = 5;
// var addition = function() {
//     var inner = 3;
//     return one + inner;
// }
// console.dir(addition);

var x = 100;
//outer function variables
function outer() {
    var y = 50;
//inner function is own scope define b/w curly brackets
function inner() {
    var z =10;
    console.log(y+z+x);
    
}
return inner;
}

let inn = outer();
console.dir(inn)
inn()
