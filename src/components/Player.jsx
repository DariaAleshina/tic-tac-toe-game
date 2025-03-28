import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleClick = () => setIsEditing(editing => !editing);

  const handleInputChange = function (event) {
    setPlayerName(event.target.value);
  };

  let playerNameView = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameView = (
      <input
        required
        className="player-name"
        type="text"
        value={playerName}
        onChange={handleInputChange}
      />
    );
  }

  return (
    <>
      <li>
        <span className="player">
          {playerNameView}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    </>
  );
}
