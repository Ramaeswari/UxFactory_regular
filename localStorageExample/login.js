function validate(){
    var username = document.getElementById("userName").value;
    var password = document.getElementById("pwd").value;
    // localStorage.setItem("textValue",username);
    const validateValues = [
        username === "eswari" && password === "1234" , 
        username === "chandini" && password === "1234"
        ].some(ele => ele )
    
    if(validateValues)
    {
        // window.location.href="welcome.html";
        localStorage.setItem("textValue",username);
        window.open("welcome.html");
        // localStorage.setItem("textValue",username);
    }
    
    else{
        alert("Invalid username or password");
    }
    return false;
}