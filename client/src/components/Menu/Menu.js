import React, {Fragment, useEffect, useState} from "react";
import './Menu.css';
import { useGlobalState } from "../../globalState.js";


/*const mybutton = async id => {
    const 
    id.preventDefault();
    try {
        console.log("power"))
        };
    } catch (err) {
        console.error(err.message);
    }
*/

function Menu() {


    const powerbutton = (e) => {
        console.log('Segaaaaa!');
    }
    const startbutton = (e) => {
        console.log('Ready...Set...Go!')

    }
    const soundbutton = (e) => {
        console.log('cue Sonic music');
    }
    const helpbutton = (e) => {
        console.log('Help me!');
    }
    const modesbutton = (e) => {
        console.log('Select a different mode');
    }
  return (
                  <table>
                      <tbody>
                          <tr>
                              <td>
                                  <button
                                      className="buttonmenu"
                                      onClick={powerbutton}
                                  >
                                  </button>
                              </td>
                              <th>ON/OFF</th>
                          </tr>
                          <tr>
                              <td>
                                  <button
                                      className="buttonmenu"
                                      onClick={startbutton}
                                  >
                                  </button>
                              </td>
                              <th>START</th>
                          </tr>
                          <tr>
                              <td>
                                  <button
                                      className="buttonmenu"
                                      onClick={soundbutton}
                                  >
                                  </button>
                              </td>
                              <th>SOUND</th>
                          </tr>
                          <tr>
                              <td>
                                  <button
                                      className="buttonmenu"
                                      onClick={helpbutton}
                                  >
                                  </button>
                              </td>
                              <th>HELP</th>
                          </tr>
                          <tr>
                              <td>
                                  <button
                                      className="buttonmenu"
                                      onClick={modesbutton}
                                  >
                                  </button>
                              </td>
                              <th>MODES</th>
                          </tr>
                      </tbody>
                  </table>
  );
}


export default Menu;