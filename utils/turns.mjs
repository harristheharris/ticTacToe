export const timeGod = { turnToggle };

function turnToggle(turn) {
  if (turn === 0) {
    return (turn = 1);
  }
  if (turn === 1) {
    return (turn = 0);
  }
}

export default timeGod;
