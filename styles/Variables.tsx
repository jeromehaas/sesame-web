import React from 'react';
import { ThemeProvider } from 'styled-components';

const variables = {
  colors: {
    red: '#B00E23',
    blue: '#5A7184',
    darkBlue: '#5A7184',
    green: '#36B37E',
    white: '#ffffff',
    lightgrey: '#F2F2F2',
    grey: '#959EAD',
    darkgrey: '#959595',
    black: '#000000',
  },
  overlayColor: {
    white: 'rgba(255, 255, 255, 0.5);',
    black: 'rgba(0, 0, 0, 0.05);',
    red: 'rgba(176, 14, 35, 0.1)',
  },
  fonts: {
    thin: 'Lato Thin',
    light: 'Lato Light',
    regular: 'Lato Regular',
    bold: 'Lato Bold',
  },
  metrics: {
    maxWidth: '1440px',
    small: '7.5px',
    medium: '15px',
    large: '30px',
    extraLarge: '60px'
  },
  space: [0, 7.5, 15, 30, 60],
  mediaQueries: {
    mobile: '450px',
    tablet: '900px',
    desktop: '1440px'
  }
}

interface Props {
  children: React.ReactNode;
}



const Variables: React.FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={variables}>{children}</ThemeProvider>
);

export default Variables;