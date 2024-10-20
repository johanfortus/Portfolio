

const typed = new Typed(".multiple-text", {
    strings: ['Computer Science Student', 'Software Developer', 'Content Creator', 'Video Editor', 'Entrepreneur'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let html = document.querySelector("html");


const modeButton = document.querySelector(".mode-button");
modeButton.addEventListener("click", (e) => {
    if(html.getAttribute("data-bs-theme") === "light") {
        html.setAttribute("data-bs-theme", "dark");
    }
    else {
        html.setAttribute("data-bs-theme", "light");
    }
})