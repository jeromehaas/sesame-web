import styled, { css } from 'styled-components';

const getColor = ({ theme, color }) => {
  switch (color) {
    case 'red':
      return css`
        color: ${theme.colors.red};
      `;
    case 'white':
      return css`
        color: ${theme.colors.white};
      `;
    default:
      return css`
        color: ${theme.colors.blue};
      `;
  }
};

const getFontWeight = ({ theme, fontWeight }) => {
  switch (fontWeight) {
    case 'bold':
      return css`
        font-family: ${theme.fonts.regular};
      `;
    default:
      return css`
       font-family: ${theme.fonts.light};
      `;
  }
};

const sharedStyles = css`
  line-height: 2;
  font-size: 16px;
  text-align: ${p => p.textAlign ? p.textAlign : 'left'};
  ${getColor};
  ${getFontWeight};

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