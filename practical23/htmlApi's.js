function allowDrop(ev)
{
    ev.preventDefault();
}
function drag(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//geolocation
var x = document.getElementById("demo");
function getlocation()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
        x.innerHTML = "Geolocation is not supported";
    }
}

function showPosition(position)
{
    x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br> Longitude: " +
        position.coords.longitude;
}