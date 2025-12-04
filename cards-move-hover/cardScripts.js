const cards = document.querySelectorAll('.c-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function (e) {
        const dir = getDirection(e, this);

        this.classList.remove("from-left", "from-right", "from-top", "from-bottom", "center");

        this.classList.add(`from-${dir}`);
    })
});

cards.forEach(card => {
    card.addEventListener("mouseleave", function (e) {

        this.classList.add("center");
        console.log("asd")
        this.classList.remove("from-left", "from-right", "from-top", "from-bottom");

    })
});



function getDirection(event, element) {
    const rect = element.getBoundingClientRect();

    // centro do elemento
    const xCenter = rect.left + rect.width / 2;
    const yCenter = rect.top + rect.height / 2;

    // posição do mouse
    const x = event.clientX - xCenter;
    const y = event.clientY - yCenter;

    // calcular ângulo
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    // converter ângulo para direção
    if (angle >= -45 && angle < 45) {
        return "right";
    } else if (angle >= 45 && angle < 135) {
        return "bottom";
    } else if (angle >= -135 && angle < -45) {
        return "top";
    } else {
        return "left";
    }
}
