function burger () {
    let burgBtn = document.querySelector(".header__burger-btn")
    let header = document.querySelector("header")
    let body = document.querySelector("body")
    let navLinks = document.querySelectorAll(".nav__menu a")

    const toggleMenu = () => {
        header.classList.toggle("open")

        if (header.classList.contains("open")) {
            body.style.overflow = "hidden"
        } else {
            body.style.overflow = "auto"
        }
    }

    burgBtn.addEventListener("click", toggleMenu)

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            header.classList.remove("open")
            body.style.overflow = "auto"
        })
    })

}

export default burger