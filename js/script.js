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

function cardDOMEffect(){
    let cards = document.getElementsByName("card")
    let card_quote_header = document.querySelector(".card_quote")
    let para1 = document.querySelector(".card_quote .para1")
    let para2 = document.querySelector(".card_quote .para2")
    cards.forEach(card => {
        card.addEventListener("change", function(){
            for(var i = 0; i < cards.length; i++){
                if(cards[i] == this) {
                    cards[i].classList.add("active")

                    if(cards[i].getAttribute("id") == "card1"){
                        card_quote_header.innerHTML = `<div class="animate_card1"><h4><strong>Seek the Right Customer Data for Personalization</strong></h4>
                        <p class="para1">It just happened to me. I sent out a recent monthly newlettes to tens of thousands of people who are definitely not named "[FNAME]". While I'm sure this happens to the best of us, interestingly, first and last names are not as important as other data in order to activate true and effective personalization.</p>
                        <p class="para2">
                        In order to personalize, we need to understand data such as buyer intent, funnel stage, preferred content types, and channels of consumption. Once you know this (assuming you have the content to deliver on buyer needs) personalization can move beyond "Hey [FNAME].”
                        </p>
                        </div>
                        `
                        // para1.innerHTML = ``
                        // para2.innerHTML = ` `
                        // document.querySelector(".card_quote").classList.add("animate_card1")
                        
                    }else if(cards[i].getAttribute("id") == "card2"){
                        card_quote_header.innerHTML = `<div class="animate_card2"><h4><strong>Capture Feedback to Improve the Customer Experience</strong></h4>
                        <p class="para1">Customer feedback can make or break a brand if it isn't dealt with effetively with new technologies that allow consumer brands to adapt faster, interact more intuitively, and directly give customers the power to influence brand and customer experience outcomes, the ability to keep customers loyal is much easier than ever before.</p>
                        <p class="para2">
                        Capturing feedback—whether it's through voice communications, facial recognition technologies, changes in purchase behavior, or surveys—requires fast methodologies to understand it, analyze it, and take action where required. Technology and data science is by far the most relevant way to directly improve customer experiences through feedback, and taking action will help brands understand their customers better and create long-lasting loyalty. A human touch also helps!
                        </p>
                        </div>
                        `
                    }else if(cards[i].getAttribute("id") == "card3"){
                        card_quote_header.innerHTML = `<div class="animate_card3"><h4><strong>Customize for Evolving Customer Expectations</strong></h4>
                        <p class="para1">Customer expectations in B2B are evolving and increasingly mirroring B2C expectations. The key to unlocking a personalized and exceptional experience is data and analytics. By ingesting and analyzing all of the data that we have at Dun & Bradstreet, we're able to understand, predict, and anticipate customer needs. This allows us to approach our customers with a solution that may fit a current or future need before they even realize that the need exists.</p>
                        <p class="para2">
                        And even though we are a B2B business, we focus on understanding current and future needs at the company, location, and individual level. This holistic view enables us to fully customize and personalize interactions across the customer journey—from a website experience to email content to a product alert to an executive workshop. By harnessing the power of our data and analytics to deliver a tailored customer experience, we have successfully improved loyalty and deepened relationships.
                        </p>
                        </div>
                        `
                    }
                }else{
                    cards[i].classList.remove("active")
                }
            }  
            
        })
    })
} 

cardDOMEffect()