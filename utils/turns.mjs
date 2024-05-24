export const timeGod = { turnToggle };

/**
 * Toggles the player turn between 0 and 1.
 *
 * @param {Number} turn
 * @returns {Number}
 */
function turnToggle(turn) {
  if (turn === 0) {
    return (turn = 1);
  }
  if (turn === 1) {
    return (turn = 0);
  }
}

export default timeGod;
