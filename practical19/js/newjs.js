function formSubmit()
{
    var val = document.getElementById("name").value;
    if(val != "")
    {
        document.getElementById("inputValue").innerHTML = val;
    }
    else if(val == "")
    {
        alert("Please fill the field");
    }
}