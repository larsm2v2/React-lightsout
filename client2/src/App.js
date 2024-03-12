import React from "react";
import './App.css';

// Import Components //
import Title from './components/Title/Title';
import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';

//Components//

const App = () => {
  return (
    <div className="App">
    <Game size={5}/>
  </div>
  );

}


    

export default App;
