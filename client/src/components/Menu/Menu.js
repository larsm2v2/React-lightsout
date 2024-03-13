import React/*{Fragment, useEffect, useState}*/ from "react";

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
const powerbutton = (e) => {
    console.log('Segaaaaa!');
}
const startbutton = (e) => {
    console.log('Ready...Set...Go!');
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

function Menu() {
  return (
                  <table>
                      <tbody>
                          <tr>
                              <td>
                                  <button
                                      className="btn btn-warning btn-lg"
                                      onClick={powerbutton}
                                  >
                                  </button>
                              </td>
                              <th>ON/OFF</th>
                          </tr>
                          <tr>
                              <td>
                                  <button
                                      className="btn btn-warning btn-lg"
                                      onClick={startbutton}
                                  >
                                  </button>
                              </td>
                              <th>START</th>
                          </tr>
                          <tr>
                              <td>
                                  <button
                                      className="btn btn-warning btn-lg"
                                      onClick={soundbutton}
                                  >
                                  </button>
                              </td>
                              <th>SOUND</th>
                          </tr>
                          <tr>
                              <td>
                                  <button
                                      className="btn btn-warning btn-lg"
                                      onClick={helpbutton}
                                  >
                                  </button>
                              </td>
                              <th>HELP</th>
                          </tr>
                          <tr>
                              <td>
                                  <button
                                      className="btn btn-warning btn-lg"
                                      onClick={modesbutton}
                                  >
                                  </button>
                              </td>
                              <th>Modes</th>
                          </tr>
                      </tbody>
                  </table>
  );
}


export default Menu;