const ColorButton = document.querySelectorAll(".color-btn");
const Body = document.querySelector("body");

function ButtonHandler(event) {
  switch (event.target.dataset.color) {
    case "yellow":
      Body.style.backgroundColor = "yellow";
      break;
    case "green":
      Body.style.backgroundColor = "green";
      break;
    case "red":
      Body.style.backgroundColor = "red";
      break;
    case "blue":
      Body.style.backgroundColor = "blue";
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
