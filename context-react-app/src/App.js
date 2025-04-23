import logo from './logo.svg';
import './App.css';
import { Parent } from './Parent';
import { UserProvider } from './UserContext';
import ThemeSwitcher from './Exam/ThemeSwitcher';
import React, { useContext } from 'react';
import { ThemeContext } from './Exam/ThemeProvider';

function App() {

  const { isDarkMode } = useContext(ThemeContext);

  return (

    //<UserProvider children = {<Parent />} />

    // <UserProvider>
    //   <Parent/>{/* -> children으로 넘어간다.  */}
    // </UserProvider>
    <div
      style={{
        backgroundColor: isDarkMode ? '#333' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>{isDarkMode ? '다크 모드' : '라이트 모드'}</h1>
      <ThemeSwitcher />
    </div>
  )
}

export default App;
