import React, {useState, useEffect, useCallback, useMemo} from 'react';
import './Game.css';
import Cell from "../Cell/Cell"
import puzzles from "../Puzzle/Puzzle"
import { useGlobalState } from '../../globalState';

const Game = ({mode,size,level}) => {
    const createGrid = useCallback(() => 
        new Array(size)
            .fill()
            .map (r =>
                new Array(size)
                .fill()
                /*Toggle either line 1 or 2 below to return to random */
                /*1*/ .map (c => false))
                , [size]);
                /*2*/ /*.map (c => *Math.random() < .6))*/
    const [game,setGame] = useState(createGrid())
    const [gamerunning, setGamerunning] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [currentIndex,setCurrentIndex] = useState('')
    const [creation, setCreation] = useState(false)
    
    const toggleLights = (row,col) => {
        setGamerunning(true)
        let copy = [...game.map(r => [...r])]
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

        //For puzzle creation
    const toggleLightsCreate = (row,col) => {
        setGamerunning(false)
        let copy = [...game.map(r => [...r])]
        copy[row][col] = !copy[row][col]
        setGame(copy)
        }

    const gameEnds = useCallback(() => {gamerunning && game.every(row => row.every(cell => !cell))},[gamerunning,game]) 
    
    const flashingAddresses = useMemo(() => [
        '0-0', '1-0', '2-0', '3-0', '4-0',
        '4-1', '4-2', '4-3', '4-4', '3-4',
        '2-4', '1-4', '0-4', '0-3', '0-2',
        '0-1', '1-1', '2-1', '3-1', '3-2',
        '3-3', '2-3', '1-3', '1-2', '2-2'
    ],[]);



    useEffect(() => {
        const updatedGame = createGrid();
        const puzzleConfig = puzzles['0-0'] && puzzles['0-0']['1-4'];
        //const puzzleConfig = puzzles['4-3'] && puzzles['4-3']['4-3'];
        if(puzzleConfig) {
        puzzleConfig.forEach(cell => {
            const [rowIndex, colIndex] = cell.split('-').map(Number);
            if (rowIndex >= 0 && rowIndex < size && colIndex >= 0 && colIndex < size) {
                updatedGame[rowIndex][colIndex] = true;
            }
        });
        setGame(updatedGame);
    }
    }, [size, createGrid]); // size should be the only dependency
    
    useEffect(() => {
        let animationTimeout;

        const startAnimation = () => {
          setIsAnimating(true);
          animationTimeout = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % flashingAddresses.length);
            setIsAnimating(false);
          }, 400);
        };
      
        if (gameEnds() && !isAnimating) {
          startAnimation();
        }
        return () => clearTimeout(animationTimeout);
      }, [isAnimating, flashingAddresses, gameEnds]);


    return (
        <div className="Game">
            {gameEnds() ? (
                game.map((row,rowIndex) => 
                <div className="row" key={rowIndex}>
                    {row.map((_, colIndex) => (
                        <button
                            key={`${rowIndex}-${colIndex}`}
                            className={`cell ${flashingAddresses[currentIndex] === `${rowIndex}-${colIndex}` && 'blinkdiv'}`}
                        />
                    ))}
                </div>
                )
            ) : ( creation ? (
            game.map((row,rowIndex) =>
                <div className="row" key={rowIndex}>
                    {row.map((_,colIndex) => (
                        <Cell
                        key={`${rowIndex}-${colIndex}`}
                        toggleLights={toggleLightsCreate}
                        isOn = {game[rowIndex][colIndex]}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                        />
                    ))

                    }

                </div>
            )        
            ) : (
                game.map((row,rowIndex) => 
                <div className="row" key={rowIndex}>
                    {row.map((_,colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            toggleLights={toggleLights}
                            isOn = {game[rowIndex][colIndex]}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            />
                    ))
                    }               
                </div>
                )
            
            ))}
        </div>
    )

}

export default Game;

/*
    const setLights = (row,col) => {
        setGamerunning(gamerunning = true)
        const copy = [...game.map(r => [...r])]
        setGame(copy)
    }
*/

/*</div>
<div className="won">You won!</div>
*/