const box = document.getElementById('card-grid');

var games = {
    "games":[
        {"name": "a", "path": "../img/gameA.jpg"},
        {"name": "b", "path": "../img/gameB.jpg"},
        {"name": "c", "path": "../img/gameC.jpg"}
    ]
}


function createCard(){
    games.games.forEach(game => {

        const card = document.createElement('div');
        const cardCanvas = document.createElement('canvas')
        const cover = document.createElement('img');
        let canvasId = games.games.indexOf(game)

        card.classList.add('c-card');
        cardCanvas.classList.add('c-canvas')
        cardCanvas.id = cardCanvas.id.concat("canvas", canvasId)
        cover.classList.add('c-cover')

        let ctx = cardCanvas.getContext('2d')

        cover.src = game.path

        box.append(card);
        card.append(cover);
        cover.append(cardCanvas)

        let finalCanvas = document.getElementById(cardCanvas.id)

        finalCanvas.addEventListener("load", (e) => {
            ctx.drawImage(finalCanvas, 50, 0)
        })

        console.log(finalCanvas.id  )

        finalCtx = finalCanvas.getContext('2d')

        //let data = finalCtx.getImageData(0, 0, 0, 0)

        //console.log(data)


        //card.textContent = game.name;
    })
}

function getImages(){

}

createCard()
