import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <button onClick={themeToggler}>Switch Theme</button>
        <Main/>
      </>
    </ThemeProvider>
  );
}

export default App;
