import { render } from './utils/render.mjs';
import { timeGod } from './utils/turns.mjs';
import { verify } from './utils/verification.mjs';

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

var playerTurn = 1;
var playerOneArray = [];
var playerTwoArray = [];

function startGame(event) {
    event.preventDefault();
    const tup = document.getElementById("tup");
    const box = document.querySelectorAll(".box");

    tup.innerHTML = "";
    console.log("start game!");

    box.forEach((boxItems) => {
        boxItems.setAttribute("style", "visibility: visible");
        console.log(boxItems);
    });
}

function boxSelection(event) {
    console.log(this);
    console.log("clicked!", $(this).attr("id"));
    let thisBtn = $(this);
    
    verify.verificationCenter(playerTurn, thisBtn);
    render.changeVisible();
    timeGod.turnToggle(playerTurn);
    render.changeColor(playerTurn, thisBtn);

}
