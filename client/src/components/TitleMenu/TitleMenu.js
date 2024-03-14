import React, { Fragment } from "react";
import './TitleMenu.css';


// Import Components //
import Title from '../Title/Title';
import Menu from '../Menu/Menu';

//Components//

const TitleMenu = () => {
  return (
    <Fragment>
      <div className="MenuFormat">
        <Title/>
        <Menu/>
      </div>
    </Fragment>
  );
}

export default TitleMenu
