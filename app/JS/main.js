import "../CSS/style.css";
import { DOMSelectors } from "./DOMSelectors.js";
let positions = [];
function cardPositions(rounds) {
  positions.splice(0, positions.length());
  for (i = 0; i <= rounds; i++) {
    if (Math.round(Math.random()) == 1) {
      const topbottom = "top";
    } else {
      let topbottom = "bottom";
    }
    if (Math.round(Math.random()) == 1) {
      let leftright = "left";
    } else {
      let leftright = "right";
    }
    let randomPositionX = Math.ceil(Math.random() * 50);
    if (i > 0) {
      for (i = 0; i >= rounds - 1; i++) {
        if (Math.abs(randomPositionY - positions[i]) <= 2) {
          let randomPositionX = Math.ceil(Math.random() * 50);
        }
      }
    }
    let randomPositionY = Math.ceil(Math.random() * 50);
    if (i > 0) {
      for (i = 0; i >= rounds - 1; i++) {
        if (Math.abs(randomPositionY - positions[i]) <= 2) {
          let randomPositionY = Math.ceil(Math.random() * 50);
        }
      }
    }
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
      `<div id="w-[2%] h-[1.5%] absoute ${card.topbottom}-${card.distanceY} ${card.leftright}-${card.distanceX}">${i}</div>`
    );
  });
}
