var birthday = new Date('May 6 1998');
//getDate method
console.log(birthday.getDate());
//getMonth method
console.log(birthday.getMonth());
//getFullyear method
console.log(birthday.getFullYear());

var frndBirthday = new Date('June 5 1998');
//setDate method
frndBirthday.setDate(1);
console.log(frndBirthday.getDate());
//setFullYear method
frndBirthday.setFullYear(1999);
console.log(frndBirthday.getFullYear());

//toString method in dates
var eventDate = new Date(1998, 4, 6, 11, 50, 9);
eventDate.toString();
console.log(eventDate);

//toDateString method
console.log(eventDate.toDateString());

//events in javascript
function timeFunction()
{
    document.getElementById("function").innerHTML=Date();
}

//mouseOver function
function mouseOver()
{
    // document.getElementById("demo").style.color="blue";
    document.getElementById("demo").innerHTML="Mouse Out on me";
    document.getElementById("demo").innerHTML=sum();
}
function sum()
{
    var x = 10, y =20;
    var sum = x + y;
    return sum;
}