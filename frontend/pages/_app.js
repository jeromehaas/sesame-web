import React, { Fragment } from 'react';
import Variables from 'styles/Variables';
import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
    <GlobalStyle />
      <Variables>
        <Component {...pageProps} />
      </Variables>
    </React.Fragment>
  ) 
}

export default MyApp
