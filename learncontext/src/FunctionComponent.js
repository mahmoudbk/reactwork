import React, {useContext } from 'react';
import { DarkTheme } from './App';
export default function FunctionComponent(){

    const darkTheme = useContext(DarkTheme);
    const ThemeStyles = {
        backgroundColor:darkTheme ? 'black':'white',
        color:darkTheme ? 'white':'black'
    }
    return (
        <div>
            <h1 style={ThemeStyles}>Hello</h1>
            {darkTheme}
        </div>
    )
}