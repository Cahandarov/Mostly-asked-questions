const accordionData = [
    {
        title: 'Frequently Asked Questions',
        content: 'Find answers to common questions about our product and services.'
    },
    {
        title: 'Getting Started',
        content: 'Learn how to get started with our platform and make the most of it.'
    },
    {
        title: 'Contact Us',
        content: 'Reach out to our support team for assistance or inquiries.'
    },
    {
        title: 'Our Team',
        content: 'Meet the talented individuals behind our company and their expertise.'
    },
    {
        title: 'Product Features',
        content: 'Explore the key features of our product that make it stand out.'
    },
    {
        title: 'Testimonials',
        content: 'Read what our satisfied customers have to say about their experiences with us.'
    }
];

var container = document.querySelector("#container");
var mainbox = document.querySelector("#mainbox");
var answers = document.getElementsByClassName("answers");


function writeData() {
    mainbox.innerHTML = "";
    for (i = 0; i < accordionData.length; i++) {
        mainbox.innerHTML += `<div class="lines">
        ${accordionData[i].title}
    
        <img src="./plus.svg" alt="plus" class="svg_plus" id="plus${i}"> 
        <img src="./minus.svg" alt="minus" class="svg_minus" id="minus${i}">
        <div class= "emphty_box"></div>
        <div class="answers" id="answer${i}">
        ${accordionData[i].content}
        </div>
    </div>`
    }
}

writeData()
var emphty_box = document.querySelectorAll(".emphty_box");
var arr_emphty_box = Array.from(emphty_box);

console.log(arr_emphty_box);
for(i=0; i<arr_emphty_box.length; i++){
    arr_emphty_box[i].addEventListener("click", (e)=>{
        console.log(e.target.offsetParent.children);

        if(e.target.offsetParent.children[3].style.display==="inline"){
            setTimeout(()=>{
                e.target.offsetParent.children[3].style.display = "none";    //answers
            }, 500);   
            e.target.offsetParent.children[0].style.display = "inline";   //plus
            e.target.offsetParent.children[1].style.display = "none";    //minus
        }
        else{
            setTimeout(() => {
            e.target.offsetParent.children[3].style.display = "inline"; //answers
        }, 500);
            e.target.offsetParent.children[0].style.display = "none";    //plus
            e.target.offsetParent.children[1].style.display = "inline";   //minus
        }
    })
}
