function formValidation()
{
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    if(fname == "" || lname == "")
    {
        alert("You have to fill the fields");
    }
    else
    {
        alert("You have to proceed");
    }
}