import React, { useState } from "react";
import FunctionComponent from "./FunctionComponent";

export const DarkTheme  = React.createContext();
function App() {

  const [dark,SetDark] = useState(true);
  function toggleTheme(){
    SetDark(prv => !prv);
  }
  return (
   <DarkTheme.Provider value={dark}>
    <button onClick={toggleTheme}>Toggle theme</button>
    <FunctionComponent/>
   </DarkTheme.Provider>
  );
}

export default App;
