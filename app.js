const body = document.querySelector("body");
const container = document.querySelector(".container");
const colorText = document.querySelector(".color-text");

const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

//Random color function

function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }

  return color;
}

// console.log(colorOne, colorTwo);

//Set color to body

function setGraient() {
  const colorOne = getGradient();
  const colorTwo = getGradient();
  const randomDegree = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
        ${randomDegree}deg,
        ${colorOne},
        ${colorTwo}
    )`;

  //   console.log(bgColor);
  body.style.background = bgColor;
  colorText.textContent = bgColor;
}

setGraient();

container.addEventListener("click", setGraient);
