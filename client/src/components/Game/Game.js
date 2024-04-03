import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./Game.css";
import Cell from "../Cell/Cell";
import puzzles from "../Puzzle/Puzzle";
import {puzzle_convert, reverse_puzzle_convert} from "../Puzzle/KeyConversion"
//import { useGlobalState } from "../../globalState";
import { useGlobalState } from "../../globalVariables";

const Game = ({ mode, size, level }) => {
    const { game, setGame,
        gamerunning, setGamerunning,
        playGame, setPlayGame,
        createGame, setCreateGame,
        autoGame, setAutoGame,
        success, setSuccess,
        currentGroup,setCurrentGroup,
        currentLevel, setCurrentLevel,
        currentIndex, setCurrentIndex,
        createGrid, flashingAddresses,
        initialGameState
    } = useGlobalState();


    //Build game array
    // const createGrid = useCallback(
    //   () =>
    //     new Array(size).fill().map((r) =>
    //       new Array(size)
    //         .fill()
    //         /*Toggle either line 1 or 2 below to return to random */
    //         /*1*/ .map((c) => false)
    //     ),
    //   [size]
    // );
    //Set Game variables
    // const [game, setGame] = useState(createGrid());
    // const [gamerunning, setGamerunning] = useState(false);
    // const [playGame, setPlayGame] = useState(true);
    // const [createGame, setCreateGame] = useState(false);
    // const [autoGame, setAutoGame] = useState(false);
    // const [success,setSuccess] = useState(false);
    // const [currentGroup,setCurrentGroup] = useState('0-0');
    // const [currentLevel,setCurrentLevel] = useState('0-0');
    // const [currentIndex,setCurrentIndex] = useState(false);
    
    const maxPlayableLevels = 5;
    //Alternate Game variables
  /*const {
    playGame,
    createGame,
    autoGame,
    success,
    currentSet,
    currentLevel,
    currentIndex,
    setPlayGame,
    setIsAnimating,
    setCreateGame,
    setAutoGame,
    setSuccess,
    setCurrentSet,
    setCurrentLevel,
    setCurrentIndex,
  } = useGlobalState({
    playGame: true,
    createGame: false,
    autoGame: false,
    success: false,
    currentSet: '0-0',
    currentLevel: '0-0',
    currentIndex: '',
  });
*/
  //Empty Game For Building Puzzles
  //const currentPuzzleConfig = puzzles['4-3']['4-3'];
  const currentPuzzleConfig = puzzles[currentGroup][currentLevel];

//Set handle for change to next level
  const handleNextLevel = () => {
    const numberLevel = reverse_puzzle_convert(currentGroup,currentLevel)
    const nextLevel = numberLevel + 1
    console.log(numberLevel)
    console.log(nextLevel)
    //Limit to First 25 Puzzles

      setSuccess(false);
      const { group, level } = (puzzle_convert(nextLevel));
      setCurrentGroup(group);
      setCurrentLevel(level);
      const updatedGame = createGrid(size);
        const puzzleConfig = puzzles[group][level];
        if (puzzleConfig) {
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
            setGame(updatedGame);
        }
        // Handle the case when all puzzles are completed

  };
  //Puzzle Action/Play
const toggleLights = (row, col) => {
  setGamerunning(true);
  setCreateGame(false);
  let copy = [...game.map((r) => [...r])];
  if (Array.isArray(copy[row]) && copy[row][col] !== undefined) {
    copy[row][col] = !copy[row][col];
    if (row < size - 1) copy[row + 1][col] = !copy[row + 1][col];
    if (row > 0) copy[row - 1][col] = !copy[row - 1][col];
    if (col < size - 1) copy[row][col + 1] = !copy[row][col + 1];
    if (col > 0) copy[row][col - 1] = !copy[row][col - 1];
    setGame(copy);
  };
  };
  //For puzzle creation
  const toggleLightsCreate = (row, col) => {
    setGamerunning(false);
    setCreateGame(false);
    if (!game[row]) {
        return;
      }
    let copy = [...game.map((r) => [...r])];
    copy[row][col] = !copy[row][col];
    setGame(copy);
  };

//Get array of lights currently on
// Define a function to get the positions of the lights that are on
/*
const getOnLights = () => {
    const onLights = [];
    game.forEach((row, rowIndex) => {
        row.forEach((isOn, colIndex) => {
            if (isOn) {
                onLights.push(`${rowIndex}-${colIndex}`);
            }
        });
    });
    return onLights;
};

// Get the positions of the lights that are on
const onLights = getOnLights();

// Output the positions of the lights that are on
console.log(onLights);
*/



  useEffect(() => {
    // console.log("currentPuzzleConfig:", currentPuzzleConfig);
    // console.log("Puzzles:", puzzles);
    // console.log("Current Group:", currentGroup);
    // console.log("Current Level:", currentLevel);
    // console.log("setCurrent Group:", setCurrentGroup);
    // console.log("setCurrent Level:", setCurrentLevel);
    // console.log("size:", size)
    const updatedGame = createGrid(size);
    const puzzleConfig = currentPuzzleConfig;
    //const puzzleConfig = currentPuzzleConfig[level];

    if (puzzleConfig) {
      puzzleConfig.forEach((cell) => {
        const [rowIndex, colIndex] = cell.split("-").map(Number);
        if (
          rowIndex >= 0 &&
          rowIndex < size &&
          colIndex >= 0 &&
          colIndex < size
        ) {
            //Ensure that updatedGame[rowIndex] is initialized as an array
            if (!updatedGame[rowIndex]) {
            updatedGame[rowIndex] = [];
          }
          updatedGame[rowIndex][colIndex] = true;
        }
      });
      setGame(updatedGame);
    }
  }, [size, createGrid, currentPuzzleConfig, level, setGame, currentGroup, currentLevel]);

  //Conditions for ending game
  const gameEnds = useCallback(function() {
    return gamerunning && game && game.every(function(row) {
      return row && row.every(function(cell) {
        return !cell;
        
      });
    });
  }, [gamerunning, game]);
    const numberLevel = reverse_puzzle_convert(currentGroup,currentLevel)
    console.log(numberLevel)
    console.log(playGame)

  return (
    <div className="Game">
      {gameEnds() && numberLevel <= (maxPlayableLevels-1)
      ? (
        <div>
          <div className="won">You've won Level {numberLevel}!</div>
          <button onClick={handleNextLevel}>Next Level?</button>
        </div>
      ) : (
        gameEnds() && numberLevel > (maxPlayableLevels-1)
        ? (
            <div>
            All Puzzles Completed! More Coming Soon...
            </div>           
        ) : (game && game.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row && row.map((_, colIndex) => (
                <Cell
                  key={`${rowIndex}-${colIndex}`}
                  toggleLights={setPlayGame ? () => toggleLights(rowIndex, colIndex) : () => toggleLightsCreate(rowIndex, colIndex)}
                  isOn={game[rowIndex][colIndex]}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  
                />
            ))}
          </div>
            )))
        )
            }
    </div>
            
  );
};

export default Game;