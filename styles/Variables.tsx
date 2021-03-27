import React from 'react';
import { ThemeProvider } from 'styled-components';

const variables = {
  colors: {
    red: '#B00E23',
    blue: '#5A7184',
    darkBlue: '#5A7184',
    green: '#36B37E',
    white: '#ffffff',
    grey: '#959EAD',
    black: '#000000',
  },
  overlayColor: {
    white: 'background: rgba(255, 255, 255, 0.05);',
    black: 'background: rgba(0, 0, 0, 0.05);'
  },
  fonts: {
    thin: 'Lato Thin',
    light: 'Lato Light',
    medium: 'Lato Regular',
    bold: 'Lato Bold',
  },
  metrics: {
    maxWidth: '1440px',
    small: '7.5px',
    medium: '15px',
    large: '30px',
    extraLarge: '60px'
  }
}

interface Props {
  children: React.ReactNode;
}



const Variables: React.FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={variables}>{children}</ThemeProvider>
);

export default Variables;