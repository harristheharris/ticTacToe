export const verify = { verificationCenter }

var playerTurn = 1;
var playerOneArray = [];
var playerTwoArray = [];

function verificationCenter(playerTurn, thisBtn){

    if (playerTurn == 0) {
        let index = $(thisBtn).attr("id").length - 1;
        playerOneArray.push($(thisBtn).attr("id")[index]);
    } else {
        let index = $(thisBtn).attr("id").length - 1;
        playerTwoArray.push($(thisBtn).attr("id")[index]);
    }
    checkWin(playerOneArray, playerTwoArray, playerTurn);

}

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
                return console.log("Player 1 Wins!");
        }
    } else if (playerTurn == 1) {
        for (let i = 0; i < 8; i++) {
            if (
                playerTwoArray.includes(winConditions[i][0]) &&
                playerTwoArray.includes(winConditions[i][1]) &&
                playerTwoArray.includes(winConditions[i][2])
            )
                return console.log("Player 2 wins!");
        }
    }
}

export default verify;