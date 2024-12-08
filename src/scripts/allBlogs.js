let allBlogsBtn = document.querySelector(".blog__all-link")
let allBlogs = document.querySelectorAll(".blog__card.plus")

function allBlog() {
    allBlogsBtn.addEventListener("click", () => {
       allBlogs.forEach(blog => {
           blog.classList.add("show")
       })
       allBlogsBtn.style.display = "none"
    })
}

export default allBlog

