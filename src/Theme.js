import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
 colors: {
  lightBackground: '#000101',
  lightPrimaryText: '#FFF',
 },
 fonts: [ 'sans-serif', 'Montserrat'],
 fontSizes: {
  small: '1em',
  medium: '2em',
  large: '3em'
}
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
