export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(turn => {
        const { square, playerClicked } = turn;
        const { row, col } = square;

        return (
          <li key={`${row}${col}`}>
            {playerClicked} selected {row + 1}:{col + 1}
          </li>
        );
      })}
    </ol>
  );
}
