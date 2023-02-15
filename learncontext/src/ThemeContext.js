import React, { useState,useContext }  from 'react';
const DarkTheme  = React.createContext();
const ThemeUpdateContext = React.createContext();

export function UseTheme(){
    return useContext(DarkTheme);
}

export function UseThemeUpdate(){
    return useContext(ThemeUpdateContext)
}


export function ThemeProvider({ children }){
    const [dark,SetDark] = useState(true);

    function toggleTheme(){
    SetDark(prv => !prv);
  }

  return(
    <DarkTheme.Provider value={dark}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
        { children }
        </ThemeUpdateContext.Provider>
    </DarkTheme.Provider>
  )
}