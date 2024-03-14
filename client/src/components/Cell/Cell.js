import React from 'react';
import './Cell.css'


const Cell = ({rowIndex,colIndex,toggleLights,isOn}) => {

    const handleClick = () => toggleLights(rowIndex,colIndex);

    return <button
        className={isOn ? "on" : "off"}
        onClick = {handleClick}/>
 

}
    export default Cell;