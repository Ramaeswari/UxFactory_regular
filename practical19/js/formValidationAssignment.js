//form validation function
function formValidation()
{
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var userMail = document.getElementById("mail").value;
    var userPassword = document.getElementById("password").value;
    var userAge = document.getElementById("age").value;
    if(fname == "" || lname == "" || userMail == "" || userPassword == "" || userAge =="")
    {
        alert("You have to fill these fields");
    }
    else
    {
        if(isNaN(userAge))
        {

            alert("Enter a number not characters")
        }
        else
        {
            if(userAge < 18)
            {
                alert("Your age should be greater than 18");
            }
            else
            {
                alert("Your form has been submitted");
            }
        }
    }
}