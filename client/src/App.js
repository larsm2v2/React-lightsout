import React, { Fragment } from "react";
import './App.css';
import './index.css'

// Import Components //
import Game from './components/Game/Game';
//import Game2 from './components/Game2/Game2';
import TitleMenu from './components/TitleMenu/TitleMenu';
//import Header from './components/Header/Header';


//Components//

const App = () => {
  return (
    <Fragment>
      <div className="AppFormat">
        <Game size={5} />
        <TitleMenu/>
      </div>
    </Fragment>
  );
}


    

export default App;
