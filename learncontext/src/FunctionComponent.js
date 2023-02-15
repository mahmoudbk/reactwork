import React from 'react';
import { UseTheme,UseThemeUpdate } from './ThemeContext';

export default function FunctionComponent(){

   const dark = UseTheme();
   
   const toggleTheme = UseThemeUpdate();

    const ThemeStyles = {
        backgroundColor:dark ? 'black':'white',
        color:dark ? 'white':'black'
    }
    return (
        <div>

            <button onClick={toggleTheme} >Toggle theme</button>
            <h1 style={ThemeStyles}>Hello</h1>
            
        </div>
    )
}