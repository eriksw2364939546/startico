function playVideo () {
    const introductionBtn = document.querySelector(".introduction__button")

introductionBtn.addEventListener("click", () => {
	let iframe = document.querySelector("iframe")
	let src = iframe.getAttribute("src")

	if (!src.includes("autoplay=1")) {
		iframe.setAttribute("src", src + "&autoplay=1")
	}
	setTimeout(() => {
		introductionBtn.style.display = "none"
	}, 1000)
})
}

export default playVideo