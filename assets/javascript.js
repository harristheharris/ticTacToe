const strtBttn = document.getElementById("start-btn");

strtBttn.addEventListener("click", startGame)

function startGame(){
    event.preventDefault();
    let tup = document.getElementById("tup");
    tup.innerHTML =" ";

    
    console.log("start game!");

}