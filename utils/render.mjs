
export const render = { changeColor , changeVisible}

function changeColor(turn, thisBtn) {
    console.log(turn);
    console.log(thisBtn);
    if (turn === 0) {
        console.log("red");
        $(thisBtn).css("background-color", "red");
    }

    if (turn === 1) {
        console.log("black");
        $(thisBtn).css("background-color", "black");
    }
}

function changeVisible() {
    $("#player-one").css(
        "visibility",
        $("#player-one").css("visibility") == "hidden" ? "visible" : "hidden"
    );
    $("#player-two").css(
        "visibility",
        $("#player-two").css("visibility") == "hidden" ? "visible" : "hidden"
    );

    if ($("#player-one").css("visibility") == "visible") {
        console.log("player 1");
    } else {
        console.log("player 2");
    }
};

export default render;
