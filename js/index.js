var element1 = document.getElementById("a1");
var element2 = document.getElementById("a2");
var element3 = document.getElementById("a3");
var element4 = document.getElementById("a4");
var description1 = document.getElementById("description1");
var description2 = document.getElementById("description2");
var description3 = document.getElementById("description3");
var description4 = document.getElementById("description4");
function myFunction1() {
    element1.classList.add("activ");
    element2.classList.remove("activ");
    element3.classList.remove("activ");
    element4.classList.remove("activ");
    setTimeout(function()
        {description1.style.display = "none"
        description2.style.display = "none"
        description3.style.display = "none"
        description4.style.display = "none" 
    }, 100);
    setTimeout(function()
        {description1.style.display = "flex"
        description2.style.display = "none"
        description3.style.display = "none"
        description4.style.display = "none" 
    }, 200);

}
function myFunction2() {
    element2.classList.add("activ");
    description2.classList.add("description");
    element1.classList.remove("activ");
    element3.classList.remove("activ");
    element4.classList.remove("activ");

    setTimeout(function()
        {description1.style.display = "none"
        description2.style.display = "none"
        description3.style.display = "none"
        description4.style.display = "none" 
    }, 100);
    setTimeout(function()
        {description2.style.display = "flex"
        description1.style.display = "none"
        description3.style.display = "none"
        description4.style.display = "none"
    }, 200);


}

function myFunction3() {
    element3.classList.add("activ");
    description3.classList.add("description");
    element1.classList.remove("activ");
    element2.classList.remove("activ");
    element4.classList.remove("activ");

    setTimeout(function()
        {description1.style.display = "none"
        description2.style.display = "none"
        description3.style.display = "none"
        description4.style.display = "none" 
    }, 100);
    setTimeout(function()
        {description3.style.display = "flex"
        description2.style.display = "none"
        description1.style.display = "none"
        description4.style.display = "none"
    }, 200);

}

function myFunction4() {
    element4.classList.add("activ");
    description4.classList.add("description");
    element3.classList.remove("activ");
    element1.classList.remove("activ");
    element2.classList.remove("activ");

    setTimeout(function()
        {description1.style.display = "none"
        description2.style.display = "none"
        description3.style.display = "none"
        description4.style.display = "none" 
    }, 100);
    setTimeout(function()
        {description4.style.display = "flex"
        description2.style.display = "none"
        description3.style.display = "none"
        description1.style.display = "none"
    }, 200);
}