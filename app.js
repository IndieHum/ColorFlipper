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
  }
}

ColorButton.forEach((button) =>
  button.addEventListener("click", ButtonHandler)
);
