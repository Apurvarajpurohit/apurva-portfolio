import React, { useState } from 'react';

const Game = () => {
    const [grid, setGrid] = useState(Array(9).fill(null))
    const [player, setPlayer] = useState('player1');
    const [isGameActive, setIsGameActive] = useState(false);

    const handleClick = (index) => {
        if (isGameActive) {
            if (!grid[index]) {
                const newGrid = [...grid];
                newGrid[index] =  player === 'player1' ?'x':'0';
                setGrid(newGrid);
                player === 'player1'?setPlayer('player2'): setPlayer('player1')
            }
        }
    }
    const handleStart = () => {
        setPlayer('player1');
        setGrid(Array(9).fill(null));
        setIsGameActive(true);
    }
    return (
        <div className='container'>
            <div className='grid'>
                {grid.map((cell, index) => (
                    <div key={index}
                        onClick={() => handleClick(index)}
                        className='cell'>
                        {cell}
                    </div>
                ))}
            </div>
            <div className='buttongroup'>
                <button className='button' onClick={() => setIsGameActive(true)}>Start</button>
                <button className='button' onClick={() => setIsGameActive(false)}>Pause</button>
                <button className='button' onClick={handleStart}>Restart</button>
            </div>
            <div className='playerGroup'>
                <button className={player === 'player1' ? 'button' : 'inActiveButton'}
                
                >Player1</button>
                <button className={player === 'player2' ? 'button' : 'inActiveButton'}
                >Player2</button>

            </div>
        </div>
    )
}

export default Game
