
/* Query responsive 'header-bg' height and adjust 'slide' positioning
   to maintain consistency across screens */
function divSize(){
    var imgQuery = document.getElementById('header-bg').clientHeight;
    var divHeight = imgQuery * 0.75;
    document.getElementById("slide").style.paddingTop = divHeight + "px";
}

divSize();
window.addEventListener("resize", divSize);

// Responsive Navbar
function navRespond() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}

navRespond(); 

    