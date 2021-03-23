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