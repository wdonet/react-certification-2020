import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import HomePage from '../../pages/Home';
import Button from '../Button';

const lightTheme = {
    bg: '#fff',
    text: '#121212',
};

const darkTheme = {
    bg: '#121212',
    text: '#fff',
};

const GlobalStyles = createGlobalStyle`body{
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bg};
  transition: 0.5s;
}`;

function App() {
    const [mode, setMode] = useState('light');

    return (
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Button
                size="10px"
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            >
                Change Theme
            </Button>
            <div id="home-section">
                <HomePage />
            </div>
        </ThemeProvider>
    );
}

export default App;
