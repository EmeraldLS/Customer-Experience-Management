(function () {
    let introduction_content = document.querySelector(".introduction_content")
    var options = {
        threshold: 0.5
    }
    const slideFromBottom = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slideFromBottom")
            } else {
                entry.target.classList.remove("slideFromBottom")
            }
        })
    }, options)
    slideFromBottom.observe(introduction_content)
})()

let headerh1 = document.querySelector(".header h1")
let headerh2 = document.querySelector(".header h2")
let headerh3 = document.querySelector(".header h3")
let caption = document.querySelector(".caption")
document.addEventListener("DOMContentLoaded", function () {
    headerh1.classList.add("fadeIn")
    headerh2.classList.add("fadeIn")
    headerh3.classList.add("fadeIn")
    caption.classList.add("fadeIn")
})
