const button = document.getElementById('nightmode');
var aboutme = document.getElementById('main');
var profile = document.getElementById('profile');

function nightmode() {
    button.addEventListener('click', function () {

        if (aboutme.style.backgroundColor == "black") {
            aboutme.style.backgroundColor = "white";
            aboutme.style.color = "black";
            profile.style.backgroundColor = "black";

        } else {
            aboutme.style.backgroundColor = "black";
            aboutme.style.color = "white";
            profile.style.backgroundColor = "white";
        }
    })
};

nightmode()