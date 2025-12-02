const slider = document.getElementsByClassName("slider");
const images = document.getElementsByClassName("card");

let slideIndex = 0;

function atualizarSlide() {
    const height = images[0].clientHeight;
    slider[0].style.transform = `translateY(-${slideIndex * height}px)`;
}

document.addEventListener("keydown", (e) => {
    if (e.key === "w") {
        slideIndex = (slideIndex - 1 + images.length) % images.length;
        atualizarSlide();
    }

    if (e.key === "s") {
        slideIndex = (slideIndex + 1) % images.length;
        atualizarSlide();
    }
});
