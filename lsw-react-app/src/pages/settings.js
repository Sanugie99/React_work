import React, { useContext } from 'react';
import { ThemeContext } from '../context/context';

export const Settings = () => {
    
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h2>Settings</h2>
            <p>현재 테마: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

