import React, { useState } from 'react';

export const LudoBoard = () => {
  const [scores, setScores] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });

  const [isLiked, setIsLiked] = useState(false);

  const handleIncrement = (color) => {
    setScores((prevScores) => ({
      ...prevScores,
      [color]: prevScores[color] + 1,
    }));
  };

  const handleIsLiked = () => {
    console.log('handleIsLiked Clicked');
    setIsLiked(!isLiked); 
  };

  return (
    <div>
      <center>
        <h2>Welcome to LudoBoard</h2>

        <button onClick={handleIsLiked}>
          {isLiked ? 'Unlike' : 'Like'} 
        </button>

        <div>
          <h3>Blue: {scores.blue}</h3>
          <button className="btn btn-primary" onClick={() => handleIncrement('blue')}>
            +1
          </button>
        </div>

        <div>
          <h3>Red: {scores.red}</h3>
          <button className="btn btn-success" onClick={() => handleIncrement('red')}>
            +1
          </button>
        </div>

        <div>
          <h3>Yellow: {scores.yellow}</h3>
          <button className="btn btn-danger" onClick={() => handleIncrement('yellow')}>
            +1
          </button>
        </div>

        <div>
          <h3>Green: {scores.green}</h3>
          <button className="btn btn-warning" onClick={() => handleIncrement('green')}>
            +1
          </button>
        </div>
      </center>
    </div>
  );
};

export default LudoBoard;
