import React, {useState} from 'react';
import './Game2.css';
import Cell from "../Cell/Cell"

const Game = () => {
    

    const createGrid = () => 
        new Array(5)
            .fill()
            .map(r => 
                new Array(5)
                .fill()
                .map (c=> Math.random() < .5)
                )
    
    const [game, setGame] = useState(createGrid())
    console.log(createGrid());

    return (
        <div className='Game2'>
            {game.map((row,rowIndex) =>
                <div className="row" key={rowIndex}>
                    {row.map((cell,colIndex) => (
                       <button key={`${rowIndex}-${colIndex}`}>{rowIndex}{colIndex}</button> 
                    ))}
                </div>
            )}
        </div>
    )
}
export default Game;

