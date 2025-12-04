const main = document.getElementById("main");
const title = document.getElementById("title");
const games = document.getElementById("games")

//const baseGames = document.querySelectorAll(".game");
//console.log(baseGames)
counter = [0, 0, 0, 0]

let index = 0

for (let i = 0; i < 4; i++) {
    let gameDiv = document.createElement("div");
    games.appendChild(gameDiv)
    gameDiv.classList.add(`color-${i}`, 'game');
}

const selectChild = games.children

function keyNavigation() {

    document.addEventListener('keypress', (e) => {
        const keyName = e.key;

        if (keyName === "d") {
            selectChild[index].classList.remove("selected")

            index = (index + 1) % selectChild.length;

            selectChild[index].classList.add("selected")
        }
        else if(keyName === "a"){
            selectChild[index].classList.remove("selected")

            index = (index + -1 + selectChild.length) % selectChild.length;

            selectChild[index].classList.add("selected")
        }
    })
}

keyNavigation()