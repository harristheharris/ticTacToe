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

var playerTurn = 0;
var playerOneArray = [];
var playerTwoArray = [];

console.log("Player 1");

function checkWin(playerOneArray, playerTwoArray, playerTurn) {
  var winConditions = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["3", "5", "7"],
    ["1", "5", "9"],
  ];

  if (playerTurn == 0) {
    for (let i = 0; i < 8; i++) {
      if (
        playerOneArray.includes(winConditions[i][0]) &&
        playerOneArray.includes(winConditions[i][1]) &&
        playerOneArray.includes(winConditions[i][2])
      )
        return alert("Player 1 Wins!");
    }
  } else if (playerTurn == 1) {
    for (let i = 0; i < 8; i++) {
      if (
        playerTwoArray.includes(winConditions[i][0]) &&
        playerTwoArray.includes(winConditions[i][1]) &&
        playerTwoArray.includes(winConditions[i][2])
      )
        return alert("Player 2 wins!");
    }
  }
}

function startGame(event) {
  event.preventDefault();
  const tup = document.getElementById("tup");
  const box = document.querySelectorAll(".box");

  tup.innerHTML = "";
  console.log("start game!");

  //arrow function being evoked right away
  box.forEach((boxItems) => {
    boxItems.setAttribute("style", "visibility: visible");
    console.log(boxItems);
  });
}

function boxSelection(event) {
  // console.log("clicked!", $(this).attr("id"));

  if (playerTurn == 0) {
    let index = $(this).attr("id").length - 1;
    playerOneArray.push($(this).attr("id")[index]);
  } else {
    let index = $(this).attr("id").length - 1;
    playerTwoArray.push($(this).attr("id")[index]);
  }

  $("#player-one").css(
    "visibility",
    $("#player-one").css("visibility") == "hidden" ? "visible" : "hidden"
  );
  $("#player-two").css(
    "visibility",
    $("#player-two").css("visibility") == "hidden" ? "visible" : "hidden"
  );

  if ($("#player-one").css("visibility") == "visible") {
    // console.log("player 1");
  } else {
    // console.log("player 2");
  }

  console.log("this", this);
  console.log("this id", $(this).attr("id"));

  let thisBtn = $(this);

  changeColor(playerTurn, thisBtn);

  // console.log("Player one array", playerOneArray);
  // console.log("Player two array", playerTwoArray);

  checkWin(playerOneArray, playerTwoArray, playerTurn);

  turnToggle(playerTurn);
}

function turnToggle(turn) {
  if (turn === 0) {
    // console.log("player 1");
    return (playerTurn = 1);
  }
  if (turn === 1) {
    // console.log("player 2");
    return (playerTurn = 0);
  }
}

function changeColor(turn, thisBtn) {
  // console.log(turn);
  // console.log(thisBtn);
  if (turn === 0) {
    console.log("red");
    $(thisBtn).css("background-color", "red");
  }

  if (turn === 1) {
    console.log("black");
    $(thisBtn).css("background-color", "black");
  }
}
