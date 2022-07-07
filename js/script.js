(function () {
    let introduction_content = document.querySelector(".introduction_content")
    let data_caption_para = document.querySelector(".data_caption p")
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
    slideFromBottom.observe(data_caption_para)
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

function slideX(){
    let data_captionh1 = document.querySelector(".data_caption h1")
    let data_captionh3 = document.querySelector(".data_caption h3")
    var options = {
        threshold: 0.5
    }
    const slideX = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slideX")
            } else {
                entry.target.classList.remove("slideX")
            }
        })
    }, options)
    slideX.observe(data_captionh1)
    slideX.observe(data_captionh3)

}

slideX()

function animatePng() {
    let halfPng = document.querySelector(".half-png")
    var options = {
        threshold: 0.1
    }
    const rotatePng = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("rotatePng")
            } else {
                entry.target.classList.remove("rotatePng")
            }
        })
    }, options)
    rotatePng.observe(halfPng)
}

animatePng()
