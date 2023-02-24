const intro = document.getElementById("intro");

function animation() {
    // Working on this right now...
    intro.addEventListener('click', function() {
        if (intro.innerText == "Hello, Im Kelvin.") {
            intro.innerText = "Im a junior in HS."
        } else if (intro.innerText == "Im a junior in HS.") {
            intro.innerText = "I'm from NYC"
        } else if (intro.innerText == "I'm from NYC") {
            intro.innerText = "Hello, Im Kelvin."
        }})
}

animation()