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
console.log("Player 1")

function changeTurn(turn) {
    if (turn == 0) {
        turn = 1;
    } else {
        turn = 0;
    }
    return turn;
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
    turnToggle(playerTurn);
    console.log("clicked!");
}


function turnToggle(turn) {
  
    if (turn === 0) {
        return (playerTurn = 1);
    } else {
        return (playerTurn = 0);
    }
}

function changeColor(turn, thisBtn){
    

}

turnToggle(playerTurn);

$(".box").click(function () {
    $("#player-one").css(
        "visibility",
        $("#player-one").css("visibility") == "hidden" ? "visible" : "hidden"
    );
    $("#player-two").css(
        "visibility",
        $("#player-two").css("visibility") == "hidden" ? "visible" : "hidden"
    )

    if ($("#player-one").css("visibility") == "visible") {
        console.log("player 1")
    } else {
        console.log("player 2");
    }

    console.log($(this).attr("id"))

    let thisBtn = $(this).attr("id");

    changeColor(playerTurn, thisBtn)


});





