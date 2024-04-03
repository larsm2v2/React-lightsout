import React, { useState, useCallback, useMemo } from "react";

export const useGlobalState = () => {
  const createGrid = useCallback(
    (size) =>
      new Array(size).fill().map((r) =>
        new Array(size)
          .fill()
          .map((c) => false)
      ),
    [],
  );

  let size = 5
  const [game, setGame] = useState(createGrid(5));
  const [gamerunning, setGamerunning] = useState(false);
  const [playGame, setPlayGame] = useState(true);
  const [createGame, setCreateGame] = useState(false);
  const [autoGame, setAutoGame] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentGroup, setCurrentGroup] = useState("0-0");
  const [currentLevel, setCurrentLevel] = useState("0-0");
  const [currentIndex, setCurrentIndex] = useState(false);
  const flashingAddresses = useMemo(() => [
    '0-0', '1-0', '2-0', '3-0', '4-0',
    '4-1', '4-2', '4-3', '4-4', '3-4',
    '2-4', '1-4', '0-4', '0-3', '0-2',
    '0-1', '1-1', '2-1', '3-1', '3-2',
    '3-3', '2-3', '1-3', '1-2', '2-2'
],[]);

  // Initialize initialGameState within useGlobalState
  const initialGameState = {
    game: createGrid(5),
    success: false,
    currentGroup: "0-0",
    currentLevel: "0-0",
    
  };

  return {
    game, setGame,
    gamerunning, setGamerunning,
    playGame, setPlayGame,
    createGame, setCreateGame,
    autoGame, setAutoGame,
    success, setSuccess,
    currentGroup,setCurrentGroup,
    currentLevel, setCurrentLevel,
    currentIndex, setCurrentIndex,
    createGrid, flashingAddresses, size,
    initialGameState, // Export initialGameState

  };
};

// initialGameState is exported separately and is accessible outside of useGlobalState
