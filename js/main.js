//hide the preloader
window.onload = function(){
    document.querySelector("#preloader").style.display = "none";
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}