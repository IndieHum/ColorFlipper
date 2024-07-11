const ColorButton = document.querySelectorAll(".color-btn");
const Body = document.querySelector("body");

function ButtonHandler(event) {
    switch (event.target.dataset.color) {
        case "yellow":
            Body.style.backgroundColor = "rgb(255,255,0)";
            break;
        case "green":
            Body.style.backgroundColor = "rgb(0,255,0)";
            break;
        case "red":
            Body.style.backgroundColor = "rgb(255,0,0)";
            break;
        case "blue":
            Body.style.backgroundColor = "rgb(0,0,255)";
            break;
        case "random":
            RandomColorPicker();
            break;
    }
}

function RandomColorPicker() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const RandomColor = `rgb(${red}, ${green}, ${blue})`;

    Body.style.backgroundColor = RandomColor;
}

ColorButton.forEach((button) =>
    button.addEventListener("click", ButtonHandler)
);
