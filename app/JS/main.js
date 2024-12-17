import "../CSS/style.css";
import { DOMSelectors } from "./DOMSelectors.js";
let positions = [];
function cardPositions(rounds) {
  positions.splice(0, positions.length());
  for (i = 0; i <= rounds; i++) {
    if (Math.round(Math.random()) == 1) {
      let topbottom = "top";
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
        if (randomPositionX == positions[i]) {
          let randomPositionX = Math.ceil(Math.random() * 50);
        }
      }
    }
    let randomPositionY = Math.ceil(Math.random() * 50);
    if (i > 0) {
      for (i = 0; i >= rounds - 1; i++) {
        if (randomPositionY == positions[i]) {
          let randomPositionY = Math.ceil(Math.random() * 50);
        }
      }
    }
  }
}
