import styled, { css } from 'styled-components';

const sharedStyles = css`
  color: ${p => p.color ? p.color : p.theme.colors.blue};
  line-height: 2;
  font-size: 16px;
  text-align: ${p => p.textAlign ? p.textAlign : 'left'};
  /* max-width: ${p => p.maxWidth ? p.maxWidth : null}; */
  
  @media (font-size: ${p => p.theme.mediaQueries.tablet}) {
    font-size: 16px;
  }

`;

const P = styled.p`
  ${sharedStyles}; 
`;

export {
  P
}