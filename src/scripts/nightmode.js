const button = document.getElementById("nightmode");
var aboutme = document.getElementById('main')

function nightmode() {
    button.addEventListener('click', function() {

        if (aboutme.style.backgroundColor == "black") {
            aboutme.style.backgroundColor = "white"
            aboutme.style.color = "black"
        } else {
            aboutme.style.backgroundColor = "black"
            aboutme.style.color = "white"
        }
    })
}

nightmode()