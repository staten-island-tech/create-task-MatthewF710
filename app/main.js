import "./CSS/style.css";
import { DOMSelectors } from "./JS/DOMSelectors.js";
let positions = [];
document
  .querySelector(".test")
  .insertAdjacentHTML("afterbegin", `<h1 class="bg-red-500">WHAKEN</h1>`);
function cardPositions(rounds) {
  positions.splice(0, positions.length);
  let topbottom = "";
  let leftright = "";
  for (let i = 1; i <= rounds; i++) {
    if (Math.round(Math.random()) == 1) {
      topbottom = "top";
    } else {
      topbottom = "bottom";
    }
    if (Math.round(Math.random()) == 1) {
      leftright = "left";
    } else {
      leftright = "right";
    }
    let randomPositionX = Math.ceil(Math.random() * 50);
    if (i > 1) {
      for (let i = 0; i >= rounds - 1; i++) {
        if (
          leftright == positions[i].leftright &&
          Math.abs(randomPositionX - positions[i].distanceX) <= 4
        ) {
          randomPositionX = Math.ceil(Math.random() * 50);
        }
      }
    }
    let randomPositionY = Math.ceil(Math.random() * 50);
    if (i > 1) {
      for (let i = 0; i >= rounds - 1; i++) {
        while (
          topbottom == positions[i].topbottom &&
          Math.abs(randomPositionY - positions[i].distanceY) <= 4
        ) {
          randomPositionY = Math.ceil(Math.random() * 50);
        }
      }
    }
    console.log(topbottom, leftright, randomPositionX, randomPositionY);
    positions.push({
      topbottom: topbottom,
      leftright: leftright,
      distanceX: randomPositionX,
      distanceY: randomPositionY,
    });
  }
}
function buttonInserter() {
  for (let i = 0; i <= positions.length - 1; i++) {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<button class="button w-[4%] h-[4%] absolute ${
        positions[i].topbottom
      }-[${positions[i].distanceY}%] ${positions[i].leftright}-[${
        positions[i].distanceX
      }%]" id="button-${i + 1}">${i + 1}</button>`
    );
  }
}
function currentbuttonchecker() {
  let currentbutton = document.querySelector(`#button-${i}`);
  currentbutton.addEventListener("click", function () {
    return true;
  });
}
function gamelogic() {
  let x = true;
  while (x == true) {
    let roundcount = 1;
    cardPositions(roundcount);
    buttonInserter();
    for (let i = 0; i <= positions.length; i++) {
      let currentbutton = currentbuttonchecker();
      document.addEventListener("click", function () {
        if (currentbutton == True) {
        }
      });
    }
    positions = [];
    roundcount++;
  }
}
cardPositions(10);
buttonInserter();
