import React from "react";
import './App.css';

// Import Components //
import Title from './components/Title/Title';
import Game from './components/Game/Game';
import Game2 from './components/Game2/Game2';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';

//Components//

const App = () => {
  return (
    <div className="App">
    <Header/>
    <Game size={5}/>
  </div>
  );

}


    

export default App;
