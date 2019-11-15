function getnames()
{

var firstname = document.getElementById("firstnameget");
var lastname = document.getElementById("lastnameget");
localStorage.setItem("firstname",firstname);
localStorage.setItem("lastname",lastname);
}
function givenames()
{
    var firstname = localStorage.getItem("firstname");
    var lastname = localStorage.getItem("lastname");
    localStorage.clear();
    document.getElementById("firstnamegive").innerHTML = firstname;
    document.getElementById("lastnamegive").innerHTML = lastname;
}
function displayRemainingChars()
{
    var numchar = document.getElementById("textbox").value.length;
    document.getElementById("remainingchars").innerHTML = ("Il vous reste "+ numchar.toString() +" caractères");
}