import React from "react";
import puzzles from "../components/Puzzle/Puzzle";
import { useGlobalState } from "../globalVariables";
import './Menu/Menu.css'

const Resetpuzzlebutton = () => {
    const { game, setGame, setGamerunning, setSuccess, createGrid, currentGroup,currentLevel, size } = useGlobalState();

    const resetPuzzle = () => {
        setGamerunning(true);
        setSuccess(false);
        const initialGame = puzzles[currentGroup][currentLevel];
        if (initialGame) {
            setGame(initialGame);
        }
    };

    return (
        <button className="buttonmenu" onClick={resetPuzzle}>Reset Puzzle</button>
        
    );
};

export default Resetpuzzlebutton;
