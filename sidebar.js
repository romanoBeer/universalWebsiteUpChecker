let links = ["link1", "link2"];

window.addEventListener('load', (event) =>{
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("closeNav").style.display = "none";
    document.getElementById("openNav").style.display = "block";

    links.map((item) => {
        document.getElementById(`${item}`).style.display = "none";
    });
});

/* Set the width of the sidebar/page content on openNav */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("closeNav").style.display = "block";
    document.getElementById("openNav").style.display = "none";

    links.map((item) => {
        document.getElementById(`${item}`).style.display = "block";
    });
}

/* Set the width of the sidebar/and page content on closeNav */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("closeNav").style.display = "none";
    document.getElementById("openNav").style.display = "block";

    links.map((item) => {
        document.getElementById(`${item}`).style.display = "none";
    });
}