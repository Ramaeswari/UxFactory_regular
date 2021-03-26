var arr = [10, 20, 30, 40, 50, 60];
console.log(arr.length);

//concat method
var array = [1, 2, 3, 4, 5, 6];
var concatMethod = array.concat(arr);
console.log(concatMethod);

//concatinating three arrays
console.log(concatMethod.concat(array, arr));

//reverse method
var flowers = ['roses', 'lily', 'chrysanthemum', 'sunflowers'];
var arrayReverse = flowers.reverse();
console.log(arrayReverse);

//sort method
var sortResult = flowers.sort();
console.log(sortResult);

//includes method
var numbers = [1, 2, 3, 10, 20];
console.log(numbers.includes(6));

//join method
console.log(numbers);
console.log(numbers.join());

//isArray method
console.log(Array.isArray([10, 20, 30]));
console.log(Array.isArray({hai: "hello"}));
console.log(Array.isArray("helo"));

//push
var animals = ['cows', 'elephants', 'fox'];

var countAnimals = animals.push('pigs');
console.log(countAnimals);
console.log(animals);

animals.push('chickens', 'cats', 'dogs');
console.log(animals);

//pop
var popResult = animals.pop();
console.log(popResult);

//shift
var shiftResult = animals.shift();
console.log(shiftResult);

//unshift
var unshiftResult = animals.unshift('ants');
console.log(unshiftResult);

//splice method
var fruits = ['apple', 'banana', 'pineapple', 'watermelon', 'pomegranate'];
var result = fruits.splice(2, 1, 5, 6);
console.log(fruits);
console.log(result);
console.log(fruits);

//slice method
var sliceResult = fruits.slice(6);
console.log(sliceResult);
var sliceResult1 = fruits.slice(3,5);
console.log(sliceResult1);

//substr and substring 
var text = "javascript is started for our batch";
var substrResult = text.substr(6, 10);
console.log(substrResult);

var substringResult = text.substring(6,10);
console.log(substringResult);