const box = document.getElementById('card-grid');


document.addEventListener("keydown", function(e){
    console.log(e.key)
    if(e.key == "a"){
        const card = document.createElement('div');
        card.classList.add('c-card');   
        box.appendChild(card)
    }
})

