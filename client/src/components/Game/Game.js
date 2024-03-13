import React, {useState, useEffect} from 'react';
import './Game.css';
import Cell from "../Cell/Cell"


const puzzle1 = [20,22,24];
const Game = ({size}) => {
    const createGrid = () => 
        new Array(size)
            .fill()
            .map (r =>
                new Array(size)
                .fill()
                /*Toggle either line 1 or 2 below to return to random */
                /*1*/ .map (c => false))
                /*2*/ /*.map (c => *Math.random() < .6))*/
    const [game,setGame] = useState(createGrid())
    let [gamerunning, setGamerunning] = useState(false)
    
    const setLights = (row,col) => {
        setGamerunning(gamerunning = true)
        const copy = [...game.map(r => [...r])]
        setGame(copy)
    }
    const toggleLights = (row,col) => {
        setGamerunning(gamerunning = true)
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
        setGame(copy)
    }
    console.log(toggleLights)
    const gameEnds = () => gamerunning && game.every(row => row.every(cell => !cell))
    
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
                            colIndex={colIndex}
                            />
                    ))}
                </div>
                )}
            

        </div>
    )
    console.log(game)
}

export default Game;

