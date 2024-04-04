import React, { Fragment } from "react";
import './App.css';
import './index.css'

// Import Components //
import Game from './components/Game/Game';
import TitleMenu from './components/TitleMenu/TitleMenu';

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
