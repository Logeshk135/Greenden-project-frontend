//Selecting side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var MenuIcon = document.getElementById("MenuIcon")
var closenav = document.getElementById("closenav")

MenuIcon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//product search funcationality
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.Value.toUpperCase()

    for(count = 0; count<productlist.length; count=count+1) 
    {

        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue)<0) 
        {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})