

const typed = new Typed(".multiple-text", {
    strings: ['Computer Science Student', 'Software Developer', 'Content Creator', 'Video Editor', 'Entrepreneur'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let html = document.querySelector("html");
let navLink = document.querySelector(".nav-link");

let aboutLink = document.getElementById("nav-about");
let projectLink = document.getElementById("nav-projects");
let contactLink = document.getElementById("nav-contact");
let buttonLink = document.getElementById("nav-button");

const modeButton = document.querySelector(".mode-button");
modeButton.addEventListener("click", (e) => {
    if(html.getAttribute("data-bs-theme") === "light") {
        html.setAttribute("data-bs-theme", "dark");
        
        aboutLink.classList.toggle("nav-light")
        projectLink.classList.toggle("nav-light")
        contactLink.classList.toggle("nav-light")
        buttonLink.classList.toggle("nav-light")
    }
    else {
        html.setAttribute("data-bs-theme", "light");

        aboutLink.classList.toggle("nav-light")
        projectLink.classList.toggle("nav-light")
        contactLink.classList.toggle("nav-light")
        buttonLink.classList.toggle("nav-light")
    }
})