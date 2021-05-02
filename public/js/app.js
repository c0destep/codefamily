window.addEventListener("load", () => {
    let icon = document.querySelectorAll(".icon-box");

    for (let i = 0; i < icon.length; i++) {
        let top = Math.floor(Math.random() * 100);
        let left = Math.floor(Math.random() * 100);
        let right = Math.floor(Math.random() * 100);
        let index = Math.floor(Math.random() * 10);

        icon[i].setAttribute('style', 'top:' + top + '%;left:' + left + '%;right:' + right + '%;z-index:' + index + ';')
    }
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const navbar = document.querySelector(".navbar");

document.querySelector(".toggle").onclick = function () {
    this.classList.toggle("active");
    navbar.classList.toggle("active");
};
