import React, { useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import Main from './components/Main';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/globalStyles';

const Label = styled.label`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3d4045;
  transition: 0.4s; 
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    transition: 0.4s;
    background: red;
    box-shadow: 0 0px 15px #2020203d;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
  }
`;

const ThemeSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  > input:checked + ${Label} {
    background-color: #e6eff5;
  }

  > input:focus + ${Label} {
    box-shadow: 0 0 1px #2196f3;
  }

  > input:checked + ${Label}:before {
    transform: translateX(24px);
    background: url(${ process.env.PUBLIC_URL + '/icons/sun.svg'});
    background-repeat: no-repeat;
    background-position: center;
  }

  > input:not(:checked) + ${Label}:before {
    background: url(${ process.env.PUBLIC_URL + '/icons/moon.svg'});
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(90%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%);
  }
}
`;

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <ThemeSwitch>
          <input type="checkbox" id="input" onChange={toggleTheme}/>
          <Label htmlFor="input"></Label>
        </ThemeSwitch>
        <Main/>
      </>
    </ThemeProvider>
  );
}

export default App;
