const button = document.getElementById("nightmode");
var aboutme = document.getElementById('main');
var border = document.getElementById('border');

function nightmode() {
    button.addEventListener('click', function () {

        if (aboutme.style.backgroundColor == "black") {
            aboutme.style.backgroundColor = "white";
            aboutme.style.color = "black";
            border.style.borderColor = "black";

        } else {
            aboutme.style.backgroundColor = "black";
            aboutme.style.color = "white";
            border.style.borderColor = "white";
        }
    })
};

nightmode()