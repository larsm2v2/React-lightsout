import React, {useState} from 'react';
import './Game.css';
import Cell from "../Cell/Cell"

const Game = ({size}) => {
    const createGrid = () => 
        new Array(size)
            .fill()
            .map (r =>
                new Array(size)
                .fill()
                .map (c => Math.random() < .4))
    console.log(createGrid)
    const [game,setGame] = useState([createGrid()])
    
    const toggleLights = (row,col) => {
        const copy = [...game.map(r => [...r])]

        copy[row][col] = !copy[row][col]
        if (row < size - 1)
            copy[row+1][col] = !copy[row+1][col]
        if (row > 0)
            copy[row-1][col] = !copy[row-1][col]
        if (col < size - 1)
            copy[row][col+1] = !copy[row][col+1]
        if (col  > 0)
            copy[row][col-1] = !copy[row][col-1]
        setGame(copy);
    }

        const gameEnds = () => game.every(row => row.every(cell => !cell))
    return (
        <div className="Game">
            {gameEnds()
            ?   <div className="won">You won!</div>
            :   game.map((row,rowIndex) => 
                <div className="row" key={rowIndex}>
                    {row.map((_,colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            toggleLights={toggleLights}
                            isOn = {game[rowIndex][colIndex]}
                            rowIndex={rowIndex}
                            colIndex={colIndex}/>
                    ))}
                </div>
                )}
            

        </div>
    )
    
}

export default Game;

