import React from 'react';
import Variables from '../styles/Variables';

function MyApp({ Component, pageProps }) {
  return (
    <Variables>
      <Component {...pageProps} />
    </Variables>
  ) 
}

export default MyApp
