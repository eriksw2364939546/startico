import { sendDataTelegramm } from "../service/service.js"
const modalForm = document.querySelectorAll(".modal form")
const newsForm = document.querySelector(".news form")
const newsInput = document.querySelector(".news input")
const modalInp = document.querySelector(".modal input")
const modal = document.querySelector(".modal")
const modPositivMessage = document.querySelector(".modal__positiv-message")

function form() {
    
    if (newsForm !== null) {
        newsForm.addEventListener("submit", (event) => {
            event.preventDefault(); 
            
            let messageNews = `New post for Startico\n\nUser mail\n\n${newsInput.value}`;
            sendDataTelegramm(messageNews).then(() => {
                modPositivMessage.classList.add("pozitiv-active");
                setTimeout(() => {
                    modPositivMessage.classList.remove("pozitiv-active");
                    modal.classList.remove("modal-active");
                }, 2500);
                newsInput.value = "";
            }).catch(error => error("Sending error:", error));
        });
    } 
    
    modalForm.forEach(form => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            let messageNews = `New post for Startico\n\nUser mail\n\n${modalInp.value}`;
            sendDataTelegramm(messageNews).then(() => {
                modPositivMessage.classList.add("pozitiv-active");
                setTimeout(() => {
                    modPositivMessage.classList.remove("pozitiv-active");
                    modal.classList.remove("modal-active");
                }, 2500);
                modalInp.value = ""; 
            }).catch(error => console.error("Sending error:", error));
        });
    });
}


export default form




