import styled, { css } from 'styled-components';

const sharedStyle = css`
  line-height: 1.25;
  color: ${p => p.theme.colors.blue};
  text-align: ${p => p.textAlign ? p.textAlign : 'left'};
`;

const H1 = styled.h1`
  ${sharedStyle};
  font-size: 70px;
  font-family: ${p => p.theme.fonts.light};

  @media (max-width: ${p => p.theme.mediaQueries.tablet}) {
    font-size: 50px;
  }

  @media (max-width: ${p => p.theme.mediaQueries.mobile}) {
    font-size: 40px;
  }
`;

const H2 = styled.h2`
  ${sharedStyle};
  font-size: 35px;

  @media (max-width: ${p => p.theme.mediaQueries.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${p => p.theme.mediaQueries.mobile}) {
    font-size: 25px;
  }
`;

export {
  H1,
  H2
}

