import React, { useContext } from 'react';
import { ThemeContext } from '../context/context';


export const Home = () => {
    
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h1>환영합니다!</h1>
            <p>현재 테마: {theme}</p>
        </div>
    );
};