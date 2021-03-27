import React from 'react';
import Variables from 'styles/Variables';
import styled from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <Variables>
      <Component {...pageProps} />
    </Variables>
  ) 
}

export default MyApp
