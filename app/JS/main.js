import "../CSS/style.css";
import { DOMSelectors } from "./DOMSelectors.js";
let positions = [];
let currentround = 2;
let currentbtn = 1;
let roundstart = false;
function numbergenerator() {
  let randomPositionX = Math.ceil(Math.random() * 100);
  let randomPositionY = Math.ceil(Math.random() * 80);
  if (randomPositionY <= 4) {
    randomPositionX += 4;
  }
  if (randomPositionY <= 80) {
    randomPositionX -= 6;
  }
  if (randomPositionX <= 6) {
    randomPositionX += 6;
  }
  if (randomPositionX >= 96) {
    randomPositionX -= 6;
  }
  return { randomPositionX, randomPositionY };
}
function cardPositions(rounds) {
  positions.splice(0, positions.length);
  for (let i = 1; i <= rounds; i++) {
    let num = numbergenerator();
    let postx = num.randomPositionX;
    let posty = num.randomPositionY;
    if (positions.length > 0) {
      for (let check = 0; check < positions.length; check++) {
        while (
          Math.abs(posty - positions[check].distanceY) <= 4 &&
          Math.abs(postx - positions[check].distanceX) <= 4
        ) {
          num = numbergenerator();
          postx = num.randomPositionX;
          posty = num.randomPositionY;
        }
      }
    }
    positions.push({
      distanceX: postx,
      distanceY: posty,
    });
  }
}
function buttonInserter() {
  DOMSelectors.container.innerHTML = "";
  for (let i = 0; i <= positions.length - 1; i++) {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<button class="btn bg-black text-white"
      style="position: absolute; width: 4%; height: 4%; top: ${
        positions[i].distanceY
      }%; left: ${positions[i].distanceX}%"  id="button-${i + 1}">${
        i + 1
      }</button>`
    );
  }
  buttoncheckers();
}
function newroundgeneration() {
  cardPositions(currentround);
  buttonInserter();
}
function buttoncheckers() {
  for (let i = 0; i < positions.length; i++) {
    const button = document.querySelector(`#button-${i + 1}`);
    button.addEventListener("click", () => buttonclickinglogic(i + 1));
  }
}
function buttonclickinglogic(buttonNumber) {
  if (buttonNumber === currentbtn) {
    currentbtn++;
    const clickedButton = document.querySelector(`#button-${buttonNumber}`);
    clickedButton.className = "btn bg-green cursor-not-allowed";
    if (currentbtn > 1) {
      const buttons = document.querySelectorAll(".btn");
      buttons.forEach((button) => {
        button.innerHTML = "";
      });
    }
    if (currentbtn > currentround) {
      currentround++;
      currentbtn = 1;
      roundstart = false;
      newroundgeneration();
    }
  } else {
    const buttons = document.querySelectorAll(".btn");
    for (let i = 1; i <= buttons.length; i++) {
      buttons[i - 1].innerHTML = `${i}`;
      console.log(i);
    }
    setTimeout(() => {
      alert("Wrong Button! Resetting the game:");
      currentround = 2;
      currentbtn = 1;
      roundstart = false;
      newroundgeneration();
    }, 100);
  }
}
function startGame() {
  cardPositions(currentround);
  buttonInserter();
}
startGame();
