var hasDarkModed = true;
function darkModeMe() {
    if (document.getElementById("darkmode").checked) {
        //make dark
        if(hasDarkModed) {
            alert("This was done using javascript!");
            hasDarkModed = false;
        }
        document.getElementById("bio").style.backgroundColor = "#011f4b";
        document.getElementById("container").style.backgroundColor = "#03396c";
        document.getElementById("bioText").style.color = "white";
        document.getElementById("header1").style.color = "white";
        document.getElementById("blurb").style.color = "white";
        document.getElementById("darkmodeLabel").style.color = "white";
        document.getElementById("radioLabel").style.color = "white";
        document.getElementById("textLabel").style.color = "white";
    } else {
        //make light
        document.getElementById("bio").style.backgroundColor = "#b3cde0";
        document.getElementById("container").style.backgroundColor = "#6497b1";
        document.getElementById("bioText").style.color = "black";
        document.getElementById("header1").style.color = "black";
        document.getElementById("blurb").style.color = "black";
        document.getElementById("darkmodeLabel").style.color = "black";
        document.getElementById("radioLabel").style.color = "black";
        document.getElementById("textLabel").style.color = "black";
    }
}