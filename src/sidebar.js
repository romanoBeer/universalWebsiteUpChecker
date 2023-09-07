window.addEventListener('load', (event) =>{
    document.getElementById("mySidebar").style.width = "80px";
    document.getElementById("main").style.marginLeft = "80px";
    document.getElementById("closeNav").style.display = "none";
    document.getElementById("openNav").style.display = "block";
    document.getElementById("link1").style.display = "none";
    document.getElementById("link2").style.display = "none";
    document.getElementById("link3").style.display = "none";
    document.getElementById("link4").style.display = "none";
});

/* Set the width of the sidebar/page content on openNav */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("closeNav").style.display = "block";
    document.getElementById("openNav").style.display = "none";
    document.getElementById("link1").style.display = "block";
    document.getElementById("link2").style.display = "block";
    document.getElementById("link3").style.display = "block";
    document.getElementById("link4").style.display = "block";
}

/* Set the width of the sidebar/and page content on closeNav */
function closeNav() {
    document.getElementById("mySidebar").style.width = "80px";
    document.getElementById("main").style.marginLeft = "80px";
    document.getElementById("closeNav").style.display = "none";
    document.getElementById("openNav").style.display = "block";
    document.getElementById("link1").style.display = "none";
    document.getElementById("link2").style.display = "none";
    document.getElementById("link3").style.display = "none";
    document.getElementById("link4").style.display = "none";
}