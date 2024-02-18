const strtBttn = document.getElementById("start-btn");

strtBttn.addEventListener("click", startGame)

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