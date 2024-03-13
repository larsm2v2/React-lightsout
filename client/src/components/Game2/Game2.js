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
        <div className='Game'>
            {game.map((row,rowIndex) =>
                <div className="row" key={rowIndex}>
                    {row.map((cell,colIndex) => (
                       <div>{rowIndex}{colIndex}</div> 
                    ))}
                </div>
            )}
        </div>
    )
}
export default Game;

