/*
================================================================
                  Import statements
================================================================
*/
import { render } from "./utils/render.mjs";
import { timeGod } from "./utils/turns.mjs";
import {
  verificationCenter,
  verifyTie,
  playerOneArray,
  playerTwoArray,
} from "./utils/verification.mjs";

/*
================================================================
                  Variable declarations
================================================================
*/
const strtBttn = document.getElementById("start-btn");

const topLeft = document.getElementById("item1");
const topMiddle = document.getElementById("item2");
const topRight = document.getElementById("item3");
const middleLeft = document.getElementById("item4");
const center = document.getElementById("item5");
const middleRight = document.getElementById("item6");
const bottomLeft = document.getElementById("item7");
const bottomMiddle = document.getElementById("item8");
const bottomRight = document.getElementById("item9");

var playerTurn = 0;

/*
================================================================
                  Event Listeners
================================================================
*/
strtBttn.addEventListener("click", startGame);
topLeft.addEventListener("click", boxSelection);
topMiddle.addEventListener("click", boxSelection);
topRight.addEventListener("click", boxSelection);
middleLeft.addEventListener("click", boxSelection);
center.addEventListener("click", boxSelection);
middleRight.addEventListener("click", boxSelection);
bottomLeft.addEventListener("click", boxSelection);
bottomMiddle.addEventListener("click", boxSelection);
bottomRight.addEventListener("click", boxSelection);

/**
 * Function that runs when the start button is pressed.
 * Reveals the game board and the player one label.
 *
 */
function startGame(event) {
  event.preventDefault();
  const tup = document.getElementById("tup");
  const box = document.querySelectorAll(".box");

  tup.innerHTML = "";
  console.log("start game!");

  box.forEach((boxItems) => {
    boxItems.setAttribute("style", "visibility: visible");
  });
  $("#player-one").css("visibility", "visible");
}

/**
 * Function that runs anytime a box in the game board is clicked.
 *
 */
function boxSelection() {
  let thisBtn = $(this);

  console.log("this button: " + $(thisBtn).attr("id"));

  let winResult = verificationCenter(playerTurn, thisBtn);

  // removes event listener from button once clicked
  let currentBtn = $(thisBtn).attr("id");
  currentBtn = document.getElementById(currentBtn);
  currentBtn.removeEventListener("click", boxSelection);

  render.changeVisible();
  render.changeColor(playerTurn, thisBtn);
  playerTurn = timeGod.turnToggle(playerTurn);

  if (winResult) {
    topLeft.removeEventListener("click", boxSelection);
    topMiddle.removeEventListener("click", boxSelection);
    topRight.removeEventListener("click", boxSelection);
    middleLeft.removeEventListener("click", boxSelection);
    center.removeEventListener("click", boxSelection);
    middleRight.removeEventListener("click", boxSelection);
    bottomLeft.removeEventListener("click", boxSelection);
    bottomMiddle.removeEventListener("click", boxSelection);
    bottomRight.removeEventListener("click", boxSelection);
  }

  let tie = verifyTie(playerOneArray, playerTwoArray);
  if (tie) {
    console.log("end");
  }
}
