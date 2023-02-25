const intro = document.getElementById("intro");

function animation() {
    // Working on this right now...
    intro.addEventListener('click', function() {
        if (intro.innerText == "Hello, Im Kelvin.") {
            intro.innerText = "I like coding.";
        } else if (intro.innerText == "I like coding.") {
            intro.innerText = "Im from NYC.";
        } else if (intro.innerText == "Im from NYC.") {
            intro.innerText = "Hello, Im Kelvin.";
        }})
};

animation()