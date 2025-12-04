const slider = document.getElementsByClassName("slider");
const images = document.getElementsByClassName("card");

let slideIndex = 0;

function atualizarSlide() {
    const height = images[0].clientHeight;
    slider[0].style.transform = `translateY(-${slideIndex * height}px)`;
}

var arr = ["a", "b", "c", "d", "e", "f"]
let arrIndex = 0

tempArr = Array.from(images)
console.log(tempArr)

function resetCards(key){

    last = tempArr.shift();
    tempArr.push(last)

}

function resetSlide(key){
    if(key == "w"){
        if(tempArr.length < arr.length){
            tempArr.push(arr[arrIndex])
            arrIndex += 1
            console.log(tempArr)
        }
        else if(tempArr.length = arr.length){
            last = tempArr.shift()
            tempArr.push(last)
            console.log(tempArr)
        }
    }
    else if(key == "s"){
            if(tempArr.length < arr.length){
            tempArr.push(arr[arrIndex])
            arrIndex += 1
            console.log(tempArr)
        }
        else if(tempArr.length = arr.length){
            first = tempArr.pop()
            tempArr.unshift(first)
            console.log(tempArr)
        }
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "w") {
        slideIndex = (slideIndex - 1 + images.length) % images.length;
        resetSlide("w")
        atualizarSlide();
    }

    if (e.key === "s") {
        slideIndex = (slideIndex + 1) % images.length;
        resetSlide("s")
        atualizarSlide();
    }
});
