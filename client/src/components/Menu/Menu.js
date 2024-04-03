import React, { useEffect, useState, useCallback, useMemo } from "react";
import './Menu.css';
import { useGlobalState } from "../../globalVariables";
import { puzzle_convert } from "../Puzzle/KeyConversion.js";
import puzzles from "../Puzzle/Puzzle.js";
import Resetpuzzlebutton from '../ResetPuzzle.js'

export default function Menu() {
    const { game, setGame,
        gamerunning, setGamerunning,
        playGame, setPlayGame,
        createGame, setCreateGame,
        autoGame, setAutoGame,
        success, setSuccess,
        currentGroup,setCurrentGroup,
        currentLevel, setCurrentLevel,
        currentIndex, setCurrentIndex,
        createGrid, flashingAddresses, size,
        initialGameState
    } = useGlobalState();
    
    const [currentMode, setCurrentMode] = useState("");

    const powerbutton = () => {
        console.log('Segaaaaa!');
    }
    
    const startbutton = () => {
        console.log('on your mark...set...go');
    }
    const soundbutton = () => {
        console.log('cue Sonic music');
    }
    
    const helpbutton = () => {
        console.log('Help me!');
    }
    
    const modesbutton = () => {
        setPlayGame(prevState => !prevState);
        setCreateGame(prevState => !prevState);
        if (playGame) {
            setCurrentMode("Play");
            setGamerunning(true);
        } else if (createGame) {
            setCurrentMode("Create");
            setGamerunning(false);
        }
        console.log('setPlayGame:', playGame);
        console.log('setCreateGame:',createGame);
        console.log('Select a different mode');
    }
    
    useEffect(() => {
        console.log('Gamerunning after update:', gamerunning);
    }, [gamerunning]);
    return (
        <table>
            <tbody>
                {/* <tr className="tablerow">
                    <td className="tabledata">
                        <button
                            className="buttonmenu"
                            onClick={powerbutton}
                        >
                            ON/OFF
                        </button>
                    </td>
                </tr> */}
                <tr className="tablerow">
                    <td className="tabledata">
                            <Resetpuzzlebutton />
                    </td>
                </tr>
                <tr className="tablerow">
                    <td className="tabledata">
                        <button
                            className="buttonmenu"
                            onClick={startbutton}
                        >
                            START
                        </button>
                    </td>
                </tr>
                <tr className="tablerow">
                    <td className="tabledata">
                        <button
                            className="buttonmenu"
                            onClick={soundbutton}
                        >
                            SOUND
                        </button>
                    </td>
                </tr>
                <tr className="tablerow">
                    <td className="tabledata">
                        <button
                            className="buttonmenu"
                            onClick={helpbutton}
                        >
                            HELP
                        </button>
                    </td>
                </tr>
                <tr className="tablerow">
                    <td className="tabledata">
                        <button
                            className="buttonmenu"
                            onClick={modesbutton}
                        >
                            MODES
                        </button>
                    </td>
                </tr>
                {/* <tr className="tablerow">
                    <td className="tabledata">
                        <div
                            className="tabledata"
                        >
                            CURRENT MODE: {currentMode}
                        </div>
                    </td>
                </tr> */}
            </tbody>
        </table>
    );

}