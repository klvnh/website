var navbutton = document.getElementById('navbutton')
var navpage = document.getElementById('navpage')
var exit = document.getElementById('exit');
var aboutme = document.getElementById('main');
var footer = document.getElementById('footer');

function nav() {
    navbutton.addEventListener('click', function () {
        navbutton.hidden = true;
        aboutme.style.display = "none"
        footer.style.display = "none"
        navpage.style.display = "flex";
    })
};

function close() {
    exit.addEventListener('click', function () {
        navbutton.hidden = false;
        aboutme.style.display = "flex"
        footer.style.display = "flex"
        navpage.style.display = "none";
    })
};

nav()
close()