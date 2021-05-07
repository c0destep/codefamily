window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const theme = localStorage.getItem('theme');

document.querySelector(".toggle").onclick = function () {
    this.classList.toggle("active");
    navbar.classList.toggle("active");
};

if (theme == 'dark') {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}

document.querySelector(".toggle-theme").onclick = function () {
    body.classList.toggle("dark");
    if (body.className == 'dark') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light')
    }
}
