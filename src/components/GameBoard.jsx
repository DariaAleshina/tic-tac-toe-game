const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, playerClicked } = turn;
    const { row, col } = square;
    gameBoard[row][col] = playerClicked;
  }
  // const [gameState, setGameState] = useState(initialGameBoard);

  // const handleSquareClick = function (rowIdx, colIdx) {
  //   setGameState(currentGameBoard => {
  //     // safely updating state by creating a deep-copy of our game state
  //     const updatedGameBoard = [...currentGameBoard.map(row => [...row])];

  //     //   updating the copy of game state
  //     updatedGameBoard[rowIdx][colIdx] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();
  // };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((el, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {el}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
