(function () {
    let introduction_content = document.querySelector(".introduction_content")
    let data_caption_para = document.querySelector(".data_caption p")
    let tactics_ccontent_para = document.querySelector(".tactics_content p")
    let unique_content_para = document.querySelector(".unique_content p")
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
    slideFromBottom.observe(tactics_ccontent_para)
    slideFromBottom.observe(data_caption_para)
    slideFromBottom.observe(introduction_content)
    slideFromBottom.observe(unique_content_para)
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

function slideX() {
    let data_captionh1 = document.querySelector(".data_caption h1")
    let data_captionh3 = document.querySelector(".data_caption h3")
    let tactics_captionh1 = document.querySelector(".tactics_content h1")
    let tactics_captionh3 = document.querySelector(".tactics_content h3")
    let unique_contenth1 = document.querySelector(".unique_content h1")
    let unique_contenth3 = document.querySelector(".unique_content h3")
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
    slideX.observe(tactics_captionh1)
    slideX.observe(tactics_captionh3)
    slideX.observe(unique_contenth1)
    slideX.observe(unique_contenth3)

}

slideX()

function animatePng() {
    let halfPng = document.querySelector(".half-png")
    let tactics_content_png = document.querySelector(".tactics_content img")
    let unique_content_png = document.querySelector(".unique_content img")
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
    rotatePng.observe(tactics_content_png)
    rotatePng.observe(unique_content_png)
}

animatePng()

function cardDOMEffect() {
    let cards = document.getElementsByName("card")
    let card_quote_header = document.querySelector(".card_quote")
    cards.forEach(card => {
        card.addEventListener("change", function () {
            for (var i = 0; i < cards.length; i++) {
                if (cards[i] == this) {
                    cards[i].classList.add("active")

                    if (cards[i].getAttribute("id") == "card1") {
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

                    } else if (cards[i].getAttribute("id") == "card2") {
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
                    } else if (cards[i].getAttribute("id") == "card3") {
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
                } else {
                    cards[i].classList.remove("active")
                }
            }

        })
    })
}

cardDOMEffect()

function sideBarScrollEffect() {
    let cap_on_pill = document.querySelector(".cap_on_pill")
    document.addEventListener("scroll", function () {
        if (window.pageYOffset > 4000) {
            cap_on_pill.style.top = "115px"
        } else if (window.pageYOffset > 2270) {
            cap_on_pill.style.top = "80px"
        }
        else if (window.pageYOffset > 1000) {
            cap_on_pill.style.top = "45px"
            return
        } else {
            cap_on_pill.style.top = "10px"
        }
    })


}

sideBarScrollEffect()

function pillEvent() {
    let pill_1 = document.querySelector("#pill_1")
    let hero_section = document.querySelector(".hero_section")
    let pill_2 = document.querySelector("#pill_2")
    let data_section = document.querySelector(".data_section")
    let pill_3 = document.querySelector("#pill_3")
    let tactics_section = document.querySelector(".tactics_section")
    let pill_4 = document.querySelector("#pill_4")
    let differentiation_section = document.querySelector(".differentiation_section")
    pill_1.addEventListener("click", function () {
        hero_section.scrollIntoView({
            behavior: "smooth"
        })
    })
    pill_2.addEventListener("click", function () {
        data_section.scrollIntoView({
            behavior: "smooth"
        })
    })
    pill_3.addEventListener("click", function () {
        tactics_section.scrollIntoView({
            behavior: "smooth"
        })
    })
    pill_4.addEventListener("click", function () {
        differentiation_section.scrollIntoView({
            behavior: "smooth"
        })
    })
}

pillEvent()

function cardDOMEffect2() {
    let touch_card_name = document.getElementsByName("touch_card_name")
    let card_quote_header = document.querySelector(".card_quote2")
    touch_card_name.forEach(card => {
        card.addEventListener("change", function () {
            for (var i = 0; i < touch_card_name.length; i++) {
                if (touch_card_name[i] == this) {
                    touch_card_name[i].classList.add("active")

                    if (touch_card_name[i].getAttribute("id") == "touch_card_1") {
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

                    } else if (touch_card_name[i].getAttribute("id") == "touch_card_2") {
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
                    } else if (touch_card_name[i].getAttribute("id") == "touch_card_3") {
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
                    else if (touch_card_name[i].getAttribute("id") == "touch_card_4") {
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

                else {
                    touch_card_name[i].classList.remove("active")
                }
            }

        })
    })
}

cardDOMEffect2()


function cardDOMEffect3() {
    let differentiation_card_name = document.getElementsByName("differentiation_card_name")
    let card_quote_header = document.querySelector(".card_quote3")
    differentiation_card_name.forEach(card => {
        card.addEventListener("change", function () {
            for (var i = 0; i < differentiation_card_name.length; i++) {
                if (differentiation_card_name[i] == this) {
                    differentiation_card_name[i].classList.add("active")
                    if (differentiation_card_name[i].getAttribute("id") == "differentiation_card_1") {
                        card_quote_header.innerHTML = `
                            <div class="animate_differentiation_card">
                                <h4><strong>Market Like a 3-Star Michelin Restaurant</strong></h4>
                            <p class="para1">I don’t even know where to begin to describe what it was like to dine at
                                Maaemo, a 3-star Michelin restaurant in Oslo
                                and one of the top 50 restaurants in the world.</p>
                            <p class="para2">
                                No menus. No ordering. You just have to roll with it… because what shows up is pretty
                                adventurous.
                            </p>
                            <p class="para3">
                                So what’s that have to do with the business of marketing? Maaemo wasn’t memorably
                                remarkable just because of the food.
                                It was just as—maybe more so—memorable for its slow, deliberate, intentional approach to
                                its business.
                            </p>
                            <p class="para4">
                                What made the entire experience special was how Maaemo created anticipation for its
                                “product.” After receiving a
                                confirmation email on the morning of my reservation, I couldn’t help but wonder, “what
                                are they cooking right now?
                            </p>
                            <p class="para5">
                                “Customer empathy” gets tossed around a lot in marketing. But it’s really about aligning
                                yourself with your customer’s
                                point-of-view. What if we thought about our marketing the way Maaemo thinks about its
                                food?
                            </p>
                            <div class="tweet_section">
                                <img src="./assets/red-left-quote-half.png" alt="" class="quote_1">
                                <strong>
                                    <p>"Customer empathy" gets tossed around a lot in marketing. But it’s really about
                                        aligning yourself with your customer’s
                                        point-of-view. @MarketingProfs
                                    </p>
                                </strong>
                                <div class="quote_line3"></div>
                                <p
                                    style="color: red; font-weight: bold;display: flex;gap: 10px;justify-content: center;cursor: pointer;">
                                    Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/red-right-quote-half.png" alt="" class="quote_2">
                            </div>
                            </div>
                        `

                    } else if (differentiation_card_name[i].getAttribute("id") == "differentiation_card_2") {
                        card_quote_header.innerHTML = `
                            <div class="animate_differentiation_card">
                                <h4><strong>Expand Content to Meet <br> Evolving Expectations</strong></h4>
                            <p class="para1">With augmented reality, we’re moving away from telling customers about a
                                product, and actually showing them how that
                                product looks in their home, or how it looks on them.</p>
                            <p class="para2">
                                The power of visualization that AR brings is creating new expectations from customers
                                that brands will need to meet.
                                Two-dimensional, flat content is just no longer enough when content is expanding.
                            </p>
                            <p class="para3">
                                Using AR now, when it's still early enough in the expansion of content, is a great way
                                for brands to differentiate
                                themselves from others and give customers a better and more personalized way of
                                accessing their products and services.
                                Younger consumers are a lot more open to immersive experiences and will soon grow
                                accustomed to expecting them from
                                brands.
                            </p>
                            <div class="tweet_section">
                                <img src="./assets/red-left-quote-half.png" alt="" class="quote_1">
                                <strong>
                                    <p>The power of visualization that AR brings is creating new expectations from
                                        customers that brands will need to meet.
                                        @CathyHackl
                                    </p>
                                </strong>
                                <div class="quote_line3"></div>
                                <p
                                    style="color: red; font-weight: bold;display: flex;gap: 10px;justify-content: center;cursor: pointer;">
                                    Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/red-right-quote-half.png" alt="" class="quote_2">
                            </div>
                            </div>
                        `
                    } else if (differentiation_card_name[i].getAttribute("id") == "differentiation_card_3") {
                        card_quote_header.innerHTML = `
                        <div class="animate_differentiation_card">
                             <h4><strong>Employ Empathy and Stewardship <br> for On Point Personalization</strong></h4>
                            <p class="para1">
                                The first part of delivering an extraordinary client experience is to not treat B2B
                                clients any differently than you
                                would B2C customers. They aren’t just comparing you to your competitors or industry;
                                their expectations are higher
                                across the board, and you have to rise to meet those expectations.
                            </p>
                            <p class="para2">
                                The second part of creating a memorable customer experience is to customize that
                                experience as much as possible—and that
                                personalization stems from empathy. Not every client has the same challenge. One client
                                may be looking to attract talent
                                while another might be seriously contemplating how to better retain their customers. You
                                have to have empathy for these
                                challenges as you help clients navigate and implement the right solutions.

                            </p>
                            <p class="para3">
                                At Zen Media, we truly believe in walking our talk. Our value statement is MESH—mastery,
                                empathy, stewardship, and
                                honor—so we try to align everything we do with those principles.
                            </p>
                            <div class="tweet_section">
                                <img src="./assets/red-left-quote-half.png" alt="" class="quote_1">
                                <strong>
                                    <p>
                                        Not every client has the same challenge. You have to have empathy to help
                                        clients navigate and implement the right
                                        solutions. @Shama
                                    </p>
                                </strong>
                                <div class="quote_line3"></div>
                                <p
                                    style="color: red; font-weight: bold;display: flex;gap: 10px;justify-content: center;cursor: pointer;">
                                    Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/red-right-quote-half.png" alt="" class="quote_2">
                            </div>
                        </div>
                        `
                    }
                    else if (differentiation_card_name[i].getAttribute("id") == "differentiation_card_4") {
                        card_quote_header.innerHTML = `
                            <div class="animate_differentiation_card">
                                 <h4><strong>Put Your Customers at the Center <br> of the Buying Universe</strong></h4>
                            <p class="para1">
                                Customer experience (CX) has always been important, but now it’s a leading priority
                                among decision-makers. In fact, a
                                Walker study predicts that by 2020 customer experience will overtake price and product
                                as the key brand differentiator.
                            </p>
                            <p class="para2">
                                The goal now is to deliver immersive, frictionless, seamless, and personalized
                                experiences, where the customer is
                                sitting at the center of the buying universe. But this must be reinforced by agile
                                cross-organizational collaboration
                                and a real-time holistic view of customers via insights from aggregated data across all
                                touchpoints—including AI, IoT,
                                mobile, and beyond.

                            </p>
                            <p class="para3">
                                Customer relationship management is no longer enough. Organizations must shift from
                                fragmented to more connected
                                approaches given the increasing number of platforms, channels, partnerships,
                                interactions, and influences. And this is
                                why customer experience management (CXM) will become a necessary foundation going
                                forward to deliver valuable,
                                rewarding, and unique customer experiences.
                            </p>
                            <div class="tweet_section">
                                <img src="./assets/red-left-quote-half.png" alt="" class="quote_1">
                                <strong>
                                    <p>
                                        The goal now is to deliver immersive, frictionless, seamless, and personalized
                                        experiences, where the customer is
                                        sitting at the center of the buying universe. @IanGertler
                                    </p>
                                </strong>
                                <div class="quote_line3"></div>
                                <p
                                    style="color: red; font-weight: bold;display: flex;gap: 10px;justify-content: center;cursor: pointer;">
                                    Click to Tweet <i class="fab fa-twitter fa-2x"></i></p>
                                <img src="./assets/red-right-quote-half.png" alt="" class="quote_2">
                            </div>
                            </div>
                        `
                    }
                }

                else {
                    differentiation_card_name[i].classList.remove("active")
                }
            }

        })
    })
}

cardDOMEffect3()
