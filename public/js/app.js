window.addEventListener("scroll", () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const navbar = document.querySelector('.navbar')

document.querySelector('.toggle').onclick = function() {
    this.classList.toggle('active')
    navbar.classList.toggle('active')
}