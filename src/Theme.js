import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  light: {
    primary: '#006876',
    onPrimary: '#ffffff',
    primaryContainer: '#a1efff',
    onPrimaryContainer: '#001f25',
    secondary: '#4a6268',
    onSecondary: '#ffffff',
    secondaryContainer: '#cde7ed',
    onSecondaryContainer: '#051f23',
    tertiary: '#545d7e',
    onTertiary: '#ffffff',
    tertiaryContainer: '#dbe1ff',
    onTertiaryContainer: '#101a37',
    background: '#fbfcfd',
    onBackground: '#191c1d',
    surface: '#fbfcfd',
    onSurface: '#191c1d',
    outline: '#6f797b',
    surfaceVariant: '#dbe4e6',
    onSurfaceVariant: '#3f484a',
    error: '#ba1a1a',
    onError: '#ffffff',
    errorContainer: '#ffdad6',
    onErrorContainer: '#410002',
  },
  dark: {
    primary: '#51d7ef',
    onPrimary: '#00363e',
    primaryContainer: '#004e59',
    onPrimaryContainer: '#a1efff',
    secondary: '#b1cbd1',
    onSecondary: '#1c3439',
    secondaryContainer: '#334a50',
    onSecondaryContainer: '#cde7ed',
    tertiary: '#bcc5eb',
    onTertiary: '#262f4d',
    tertiaryContainer: '#3c4665',
    onTertiaryContainer: '#dbe1ff',
    background: '#191c1d',
    onBackground: '#e1e3e3',
    surface: '#191c1d',
    onSurface: '#e1e3e3',
    outline: '#899295',
    surfaceVariant: '#3f484a',
    onSurfaceVariant: '#bfc8ca',
    error: '#ffb4ab',
    onError: '#690005',
    errorContainer: '#93000a',
    onErrorContainer: '#ffdad6',
  },
  fonts: [ 'sans-serif', 'Montserrat'],
  fontSizes: {
    small: '1.2rem',
    medium: '2.4rem',
    large: '3.6rem'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
