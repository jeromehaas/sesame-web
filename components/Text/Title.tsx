import styled, { css } from 'styled-components';


const sharedStyled = css`
  line-height: 1.25;
  color: ${p => p.theme.blue}
`;

const H1 = styled.h1`
  font-size: 70px;

  @media (max-width: ${p => p.theme.mediaQueries.tablet}) {
    font-size: 50px;
  }

  @media (max-width: ${p => p.theme.mediaQueries.mobile}) {
    font-size: 40px;
  }
`;

const H2 = styled.h2`
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

