function openModal () {
    let modal = document.querySelector(".modal")
    let openModalBtns = document.querySelectorAll(".open__modal")
    let closeModal = document.querySelector(".close__modal")
    let headerBurgerBtn = document.querySelector(".header__burger-btn")
    let header = document.querySelector("header")
    let headerNavMenuItems = document.querySelectorAll(".nav__menu a")



    openModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.add("modal-active")
            header.classList.remove("open")
            headerBurgerBtn.style.zIndex = "0"

        })
    })

    closeModal.addEventListener("click", () => {
        modal.classList.remove("modal-active")
        headerBurgerBtn.style.zIndex = "3000"
    } )


    headerNavMenuItems.forEach(item => {
        item.addEventListener("click" , () => {
            header.classList.remove("open")
        })
    })


}

export default openModal