import "../CSS/style.css";
import { DOMSelectors } from "./DOMSelectors.js";
let positions = [];
function cardPositions(rounds) {
  positions.splice(0, positions.length());
  let topbottom = "";
  let leftright = "";
  for (i = 0; i <= rounds; i++) {
    if (Math.round(Math.random()) == 1) {
      topbottom = "top";
    } else {
      topbottom = "bottom";
    }
    let randomPositionY = Math.ceil(Math.random() * 50);
    if (Math.round(Math.random()) == 1) {
      leftright = "left";
    } else {
      leftright = "right";
    }
    let randomPositionX = Math.ceil(Math.random() * 50);
    if (i > 0) {
      for (i = 0; i >= positions.length; i++) {
        if (randomPositionX - smth) {
          //redefine X
        }
      }
    }
  }
}
