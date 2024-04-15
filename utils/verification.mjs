export const verify = { verificationCenter };

/*
================================================================
                  Variable Declarations
================================================================
*/
var playerOneArray = [];
var playerTwoArray = [];

/**
 * Checks which player clicked on a box and adds the number of that box
 * to their array. Then calls the checkWin function to see if they won.
 * 
 * @param {Number} playerTurn 
 * @param {Object} thisBtn 
 */
function verificationCenter(playerTurn, thisBtn) {
  if (playerTurn == 0) {
    let index = $(thisBtn).attr("id").length - 1;
    playerOneArray.push($(thisBtn).attr("id")[index]);
  } else {
    let index = $(thisBtn).attr("id").length - 1;
    playerTwoArray.push($(thisBtn).attr("id")[index]);
  }
  checkWin(playerOneArray, playerTwoArray, playerTurn);
}

/**
 * Checks to see if/when a player gets 3 in a row.
 *
 * @author Brandon Carter <brandon.d.carter99@gmail.com>
 *
 * @param {Array} playerOneArray  Array of chosen boxes for player one.
 * @param {Array} playerTwoArray  Array of chosen boxes for player two.
 * @param {Number} playerTurn     Either 0 or 1 depending on which turn it is.
 */
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
