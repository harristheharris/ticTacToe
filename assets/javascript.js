const strtBttn = document.getElementById("start-btn");
const topLeft = document.getElementById("item1")
const topMiddle = document.getElementById("item2")
const topRight = document.getElementById("item3")
const middleLeft = document.getElementById("item4")
const center = document.getElementById("item5")
const middleRight = document.getElementById("item6")
const bottomLeft = document.getElementById("item7")
const bottomMiddle = document.getElementById("item8")
const bottomRight = document.getElementById("item9")

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

function startGame(event){
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

function boxSelection(event){
    console.log('clicked!')

};

//as of now, we have a start button and a board that is displayed once the start button is pressed. 
//what else do we need??
//We choose to have turns alternate and therefore, the symbol place to alternate
//with this in mind I want a turn indication to appear for whose turn it is

//determining turn
//when the start button is pressed player1 turn is set right away to play
//when a square is selcted to place a symbol the turn is switched
function turnToggle() {

    

}




