import "../CSS/style.css";
import { DOMSelectors } from "./DOMSelectors.js";
let positions = [];
function cardPositions(rounds) {
  positions.splice(0, positions.length);
  let topbottom = "";
  let leftright = "";
  for (let i = 0; i <= rounds; i++) {
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
    if (i > 0) {
      for (let i = 0; i >= rounds - 1; i++) {
        if (
          leftright == positions[i].leftright &&
          Math.abs(randomPositionX - positions[i].distanceX) <= 2
        ) {
          randomPositionX = Math.ceil(Math.random() * 50);
        }
      }
    }
    let randomPositionY = Math.ceil(Math.random() * 50);
    if (i > 0) {
      for (let i = 0; i >= rounds - 1; i++) {
        if (
          topbottom == positions[i].topbottom &&
          Math.abs(randomPositionY - positions[i].distanceY) <= 2
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
  positions.forEach((card) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="w-[2%] h-[1.5%] absoute ${card.topbottom}-${
        card.distanceY - 2
      } ${card.leftright}-${card.distanceX}" id="button-${i}">${i}</div>`
    );
  });
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
cardPositions(5);
