import React, { useEffect } from "react";
import "./Game.css";
import Cell from "../Cell/Cell";
import puzzles from "../Puzzle/Puzzle";
import { puzzle_convert, reverse_puzzle_convert } from "../Puzzle/KeyConversion";
import { useGlobalState } from "../../globalVariables";

// Primary Game Board
const Game = ({ mode, size, level }) => {
  const {
    game,
    setGame,
    gamerunning,
    setGamerunning,
    setSuccess,
    setCreateGame,
    setPlayGame,
    currentGroup,
    setCurrentGroup,
    currentLevel,
    setCurrentLevel,
    createGrid,
  } = useGlobalState();

  //Select # of playable levels before ending game
  const maxPlayableLevels = 25;

  // Set the Level by Address currentGroup addresses set i.e. 0-0 through 4-4 are 25 addresses for a set.
  // There are 25 levels in a set. currentLevel similarly has 0-0 through 4-4 as 25 addresses for each level.
  // e.g. Level 1 => ['0-0']['0-0'] and Level 25 => ['0-0']['4-4']. Level 26 enters a new set with the address: ['0-1']['0-0']
  const currentPuzzleConfig = puzzles[currentGroup][currentLevel];

  //Changes Level by Passing through Conversion Function to base10 value, increments, then returns to address value (effectively base5)
  const handleNextLevel = () => {
    const numberLevel = reverse_puzzle_convert(currentGroup, currentLevel);
    const nextLevel = numberLevel + 1;
    setSuccess(false);
    const { group, level } = puzzle_convert(nextLevel);
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
  };

  //Handles button press effect while game is running
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
    }
  };
  //Handles button press effect while creation Mode is set.
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

//Handles the game assigning addresses to level
  useEffect(() => {
    const updatedGame = createGrid(size);
    const puzzleConfig = currentPuzzleConfig;

    if (puzzleConfig) {
      puzzleConfig.forEach((cell) => {
        const [rowIndex, colIndex] = cell.split("-").map(Number);
        if (
          rowIndex >= 0 &&
          rowIndex < size &&
          colIndex >= 0 &&
          colIndex < size
        ) {
          if (!updatedGame[rowIndex]) {
            updatedGame[rowIndex] = [];
          }
          updatedGame[rowIndex][colIndex] = true;
        }
      });
      setGame(updatedGame);
    }
  }, [size, createGrid, currentPuzzleConfig, setGame, currentGroup, currentLevel]);

  //End of Game Logic --> requires both game to be in progress (gamerunning) and all light to be out (creationMode should also be excluded)
  const gameEnds = () => {
    return (
      gamerunning &&
      game &&
      game.every((row) => row.every((cell) => !cell))
    );
  };

  const numberLevel = reverse_puzzle_convert(currentGroup, currentLevel);

  //Returns gameEnd triggers passing through nested ternaries
  return (
    <div className="Game">
      {gameEnds() && numberLevel <= maxPlayableLevels - 1 ? (
        <div>
          <div className="won">You've won Level {numberLevel}!</div>
          <button onClick={handleNextLevel}>Next Level?</button>
        </div>
      ) : gameEnds() && numberLevel > maxPlayableLevels - 1 ? (
        <div>All Puzzles Completed! More Coming Soon...</div>
      ) : (
        game &&
        game.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row &&
              row.map((_, colIndex) => (
                <Cell
                  key={`${rowIndex}-${colIndex}`}
                  toggleLights={
                    setPlayGame
                      ? () => toggleLights(rowIndex, colIndex)
                      : () => toggleLightsCreate(rowIndex, colIndex)
                  }
                  isOn={game[rowIndex][colIndex]}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                />
              ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Game;
