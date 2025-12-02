const scroller = document.getElementById("scroller");
const slider = document.getElementById("slider");
const cards = document.getElementsByClassName("card");

let cardsArray = Array.from(cards);
let slideIndex = 0;


function updateSlide(index) {
    const height = cards[1].clientHeight;
    
    slider.style.transform = `translateY(-${index * height}px)`;
    
    let firstCard = cards[0]
    let lastCard = cards[cards.length - 1]

    let firstClone = firstCard.cloneNode(true)
    let lastClone = lastCard.cloneNode(true)
    
    
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone)
    
}

function slideCards(key, i){
    if(key === "s"){
        let last = cardsArray.shift();
        //cardsArray.push(last);
        //slider.appendChild(last)
        updateSlide(i)
    }
    else if(key === "w"){
        let first = cardsArray.pop();
        //cardsArray.unshift(first);
        //slider.prepend(first)
        updateSlide(i)
    }
}

document.addEventListener("keydown", (e) => {
    if(e.key === "w"){
        slideIndex = (slideIndex - 1 + cards.length) % cards.length;
        slideCards(e.key, slideIndex)
    }
    
    if(e.key === "s")
    {
        slideIndex = (slideIndex + 1) % cards.length;
        slideCards(e.key, slideIndex)

    }
})
