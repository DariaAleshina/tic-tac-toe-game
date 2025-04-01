import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { useState } from 'react';
import { WINNING_COMBINATIONS } from '../winning-combinations';
import GameOver from './components/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let gameBoard = initialGameBoard;

const deriveActivePlayer = function (gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].playerClicked === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  for (const turn of gameTurns) {
    const { square, playerClicked } = turn;
    const { row, col } = square;
    gameBoard[row][col] = playerClicked;
  }

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
      break;
    }
  }

  const handleSelectSquare = function (rowIndex, colIndex) {
    // setActivePlayer(currentActivePlayer =>
    //   currentActivePlayer === 'X' ? 'O' : 'X'
    // );
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          playerClicked: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        {winner && <p>The winner is {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
