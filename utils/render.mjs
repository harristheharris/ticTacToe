export const render = { changeColor, changeVisible };

/**
 * Changes the color of the box the player has just clicked, based on
 * which player clicked it.
 *
 * @author Anthony Harris <anthony.harris7777@gmail.com>
 *
 * @param {Number} turn     Either 0 or 1.
 * @param {Object} thisBtn  The current clicked button.
 */
function changeColor(turn, thisBtn) {
  if (turn === 0) {
    $(thisBtn).css("background-color", "red");
  }

  if (turn === 1) {
    $(thisBtn).css("background-color", "black");
  }
}

/**
 * Toggles the player name's visibility.
 *
 * @author Brandon Carter
 */
function changeVisible() {
  $("#player-one").css(
    "visibility",
    $("#player-one").css("visibility") == "hidden" ? "visible" : "hidden"
  );
  $("#player-two").css(
    "visibility",
    $("#player-two").css("visibility") == "hidden" ? "visible" : "hidden"
  );
}

export default render;
