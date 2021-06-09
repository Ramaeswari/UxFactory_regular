function addition(a, b){
    if(isNaN(a) && isNaN(b))
    {
        return "please pass only numbers"
    }
    return a + b;
}
console.log(addition(10, 20)); 
console.log(addition("hai", "hello")); 
console.log(addition("hai", false));
console.log(addition(10, "hello"));
console.log(addition()); 
