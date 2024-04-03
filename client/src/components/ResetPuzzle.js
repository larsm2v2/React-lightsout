import React from "react";
import puzzles from "../components/Puzzle/Puzzle";
import { useGlobalState } from "../globalVariables";
import './Menu/Menu.css'

const Resetpuzzlebutton = () => {
    const { game, setGame, setGamerunning, setSuccess, createGrid, currentGroup,currentLevel, size } = useGlobalState();

    const resetPuzzle = () => {
        setGamerunning(true);
        setSuccess(false);
        const updatedGame = createGrid(size);
        const puzzleConfig = puzzles[currentGroup][currentLevel];
        if (puzzleConfig) {
            // Reset the updatedGame array to false for all cells
            //const newGame = updatedGame.map(row => row.map(cell => false));
            // Set cells specified in puzzleConfig to true
            puzzleConfig.forEach((cell) => {
                const [rowIndex, colIndex] = cell.split("-").map(Number);
                if (
                    rowIndex >= 0 &&
                    rowIndex < size &&
                    colIndex >= 0 &&
                    colIndex < size
                ) {
                    updatedGame[rowIndex][colIndex] = true;
                }
            });
            //game(updatedGame);
            setGame({ type: 'RESET_PUZZLE', payload: updatedGame });
            console.log('Reset!')
            console.log('setGame:',setGame)
            console.log('createGrid:',updatedGame)
            console.log('currentGroup',currentGroup)
            console.log('currentLevel:',currentLevel)
        }
    };

    return (
        <button className="buttonmenu" onClick={resetPuzzle}>Reset Puzzle</button>
        
    );
};

export default Resetpuzzlebutton;
