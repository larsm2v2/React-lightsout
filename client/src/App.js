import React, { Fragment } from "react";
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
    <Fragment>
      <div className="App">
        <Game size={5} />
      </div>
      <div className="Menu">
        <Title/>
        <Menu/>
      </div>
    </Fragment>
  );

}


    

export default App;
