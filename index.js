//Selecting side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var MenuIcon = document.getElementById("MenuIcon")
var closenav = document.getElementById("closenav")

MenuIcon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click" ,function()
{
    sidenav.style.right="-50%"
})

