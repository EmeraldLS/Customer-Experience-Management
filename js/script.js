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
                        <div class="tweet_section">
                                <img src="./assets/quote-l-3-half.png" alt="" class="quote_1">
                                <strong><p>In order to personalize the customer experience, we need to understand data such as buyer's intent, funnel stage, preferred content types, and channels of consumption. @BrennerMichael</p></strong>
                                <div class="quote_line"></div>
                                <p style="color: #00539D; font-weight: bold;display: flex;gap: 10px;justify-content: center;">Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/quote-r-half.png" alt="" class="quote_2">
                            </div>
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
                        <div class="tweet_section">
                                <img src="./assets/quote-l-3-half.png" alt="" class="quote_1">
                                <strong><p>Customer feedback can make or break a brand if it's isn't dealt with effectively. @MarketingGeyeus</p></strong>
                                <div class="quote_line"></div>
                                <p style="color: #00539D; font-weight: bold;display: flex;gap: 10px;justify-content: center;">Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/quote-r-half.png" alt="" class="quote_2">
                            </div>
                        </div>
                        `
                    }else if(cards[i].getAttribute("id") == "card3"){
                        card_quote_header.innerHTML = `<div class="animate_card3"><h4><strong>Customize for Evolving Customer Expectations</strong></h4>
                        <p class="para1">Customer expectations in B2B are evolving and increasingly mirroring B2C expectations. The key to unlocking a personalized and exceptional experience is data and analytics. By ingesting and analyzing all of the data that we have at Dun & Bradstreet, we're able to understand, predict, and anticipate customer needs. This allows us to approach our customers with a solution that may fit a current or future need before they even realize that the need exists.</p>
                        <p class="para2">
                        And even though we are a B2B business, we focus on understanding current and future needs at the company, location, and individual level. This holistic view enables us to fully customize and personalize interactions across the customer journey—from a website experience to email content to a product alert to an executive workshop. By harnessing the power of our data and analytics to deliver a tailored customer experience, we have successfully improved loyalty and deepened relationships.
                        </p>
                        <div class="tweet_section">
                                <img src="./assets/quote-l-3-half.png" alt="" class="quote_1">
                                <strong><p>The key to unlocking a personalized and exceptional experience is data and analytics. @RachelRitcher</p></strong>
                                <div class="quote_line"></div>
                                <p style="color: #00539D; font-weight: bold;display: flex;gap: 10px;justify-content: center;">Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/quote-r-half.png" alt="" class="quote_2">
                            </div>
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

function sideBarScrollEffect(){
    let data_section = document.querySelector(".data_section")
    let cap_on_pill = document.querySelector(".cap_on_pill")
    document.addEventListener("scroll", function(){
        if(window.pageYOffset > 1000){
            cap_on_pill.style.top = "45px"
            return
        }else{
            cap_on_pill.style.top = "10px"
        }
    })
    
}

sideBarScrollEffect()

function pillEvent(){
    let pill_1 = document.querySelector("#pill_1")
    let hero_section = document.querySelector(".hero_section")
    let pill_2 = document.querySelector("#pill_2")
    let data_section = document.querySelector(".data_section")
    pill_1.addEventListener("click", function(){
        hero_section.scrollIntoView({
            behavior: "smooth"
        })
    })
    pill_2.addEventListener("click", function(){
        data_section.scrollIntoView({
            behavior: "smooth"
        })
    })
}

pillEvent()

function cardDOMEffect2(){
    let touch_card_name = document.getElementsByName("touch_card_name")
    let card_quote_header = document.querySelector(".card_quote2")
    touch_card_name.forEach(card => {
        card.addEventListener("change", function(){
            for(var i = 0; i < touch_card_name.length; i++){
                if(touch_card_name[i] == this) {
                    touch_card_name[i].classList.add("active")

                    if(touch_card_name[i].getAttribute("id") == "touch_card_1"){
                        card_quote_header.innerHTML = `
                            <div class="animate_touch_card">
                            <h4><strong>Remove Obstacles & Recognize Emotions for a Seamless Experience</strong></h4>
                            <p class="para1">Creating a holistic and comprehensive customer experience requires a full understanding of where your customers could first be introduced to your brand, the unique pathways that could be possible, and the reasons why a customer found your brand.</p>
                            <p class="para2">
                                Marketers need to use this information to create a seamless multi-touch experience that guides customers or potential customers to what they are looking for, without added steps that can deter or confuse them.
                            </p>
                            <p class="para3">
                                We need to answer their questions before they ask. This is what makes for a sophisticated and effective customer experience. It's not about telling the customer how to feel, it's about informing them, guiding them to their own conclusions, and recognizing their emotions. 
                            </p>
                            <div class="tweet_section">
                                <img src="./assets/green-left-quote-1-half.png" alt="" class="quote_1">
                                <strong>
                                    <p>Marketers need to answer their customers' questions before they're even asked. This is what makes for a sophisticated and effective customer experience. @CynthiaLIVE</p>
                                </strong>
                                <div class="quote_line2"></div>
                                <p
                                    style="color: green; font-weight: bold;display: flex;gap: 10px;justify-content: center;cursor: pointer;">
                                    Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/green-right-quote-1-half.png" alt="" class="quote_2">
                            </div>
                            </div>
                        `
                        // para1.innerHTML = ``
                        // para2.innerHTML = ` `
                        // document.querySelector(".card_quote").classList.add("animate_card1")
                        
                    }else if(touch_card_name[i].getAttribute("id") == "touch_card_2"){
                        card_quote_header.innerHTML = `
                            <div class="animate_touch_card">
                            <h4><strong>Start By Considering How to Fit Into the Customer’s Life</strong></h4>
                            <p class="para1">Despite all of the talk about "customer-centricity,"brands are still inwardly focused, by and large. It's understandable: brand managers live and breathe the brands they represent, and have an outsized enthusiasm for them. This isn't necessarily a bad thing—we need brand managers to believe in what they represent. </p>
                            <p class="para2">
                                But unless you're Starbucks, people generally don't wake up thinking about your brand. They have other priorities: kids to get to get to school, assignments that are due, conference calls, doctor's appointments, and a thousand other things. Considering how you fit into a consumer's life is a much more important part of the experience creation than any other part of it. 
                            </p>
                            <p class="para3">
                                The more brands that approach their experiences by truly understanding their customers and seeing the world through their perspectives, the better off we'll all be. 
                            </p>
                            <div class="tweet_section">
                                <img src="./assets/green-left-quote-1-half.png" alt="" class="quote_1">
                                <strong>
                                    <p>Consider how you fit into a consumer's life is a muc more important part of the experience creation than any other part of it. @ScottMonty</p>
                                </strong>
                                <div class="quote_line2"></div>
                                <p
                                    style="color: green; font-weight: bold;display: flex;gap: 10px;justify-content: center;cursor: pointer;">
                                    Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/green-right-quote-1-half.png" alt="" class="quote_2">
                            </div>
                            </div>
                        `
                    }else if(touch_card_name[i].getAttribute("id") == "touch_card_3"){
                        card_quote_header.innerHTML = `
                        <div class="animate_touch_card">
                        <h4><strong>Build Trust in Each Phase of the Buyer Experience</strong></h4>
                        <p class="para1">A little empathy and a lot of data can go a long way when it comes to providing customers what they need in order to trust and buy. The three fundamental steps of the buyer experience in which brands should work to build trust are:</p>
                            <ol class="list">
                                <li><b>Attract:</b>  Understand how customers discover new solutions, and create relevant marketing in all the channels they use.
                                </li>
                                <li><b>Engage:</b> Use insights about content topic and format preferences to deliver the right kind of content experience.
                                </li>
                                <li><b>Convert:</b> Provide compelling triggers to action to help buyers understand what the solution is, how it matters to them, and what to do next. </li>
                            </ol>
                        <div class="para2">
                            Data-informed insights about customer preferences around information discovery, consumption, and engagement are critical for providing the most relevant and meaningful experience.
                        </div>
                        <div class="tweet_section">
                            <img src="./assets/green-left-quote-1-half.png" alt="" class="quote_1">
                            <strong>
                                <p>A little empathy and a lot of data can go a long way when it comes to providing customers what they need in order to trust and buy. @leeodden</p>
                            </strong>
                            <div class="quote_line2"></div>
                            <p
                                style="color: green; font-weight: bold;display: flex;gap: 10px;justify-content: center;cursor: pointer;">
                                Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                            <img src="./assets/green-right-quote-1-half.png" alt="" class="quote_2">
                        </div>
                        </div>
                        `
                    }
                    else if(touch_card_name[i].getAttribute("id") == "touch_card_4"){
                        card_quote_header.innerHTML = `
                            <div class="animate_touch_card"><h4><strong>Use Deeper Touchpoints to Better Partner with Customers</strong></h4>
                            <p class="para1">At Palo Alto Networks, our mission is to partner with our customers to ensure that they can protect their businesses from cyberthreats that are becoming so prevalent in this digital age. While we of course want to engage new leads and highlight key messaging, it's also important for our customers to know that we're there for them throughout their journey.</p>
                            <div class="para2">
                                
                                Customers want to know that we're an authority in the security space and that they can trust our products to secure their most valuable assets. This requires deeper touchpoints with our customers to ensure that we're not just telling them what problems we solve, but also how to use our products in the best way to protect their environments.
                            </div>
                            <div class="tweet_section">
                                <img src="./assets/green-left-quote-1-half.png" alt="" class="quote_1">
                                <strong>
                                    <p>Customers want to know that your brand is an authority and that they can trust your products to secure their most valuable assets. @PaloAltoNtwks</p>
                                </strong>
                                <div class="quote_line2"></div>
                                <p
                                    style="color: green; font-weight: bold;display: flex;gap: 10px;justify-content: center;cursor: pointer;">
                                    Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/green-right-quote-1-half.png" alt="" class="quote_2">
                            </div>
                            </div>
                        `
                    }
                }
                
                else{
                    touch_card_name[i].classList.remove("active")
                }
            }  
            
        })
    })
} 

cardDOMEffect2()