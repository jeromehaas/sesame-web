import { redirect } from 'next/dist/next-server/server/api-utils';
import styled, { css } from 'styled-components';

const getColor = ({ theme, backgroundColor }) => {

  switch (backgroundColor) {
    case 'red':
      return css`
        background-color: ${theme.colors.red};
      `;
    case 'grey':
      return css`
        background-color: ${theme.colors.lightgrey};
      `;
    default:
      return css`
        background-color: ${theme.colors.white};
      `;
  }

};


const StyledSection = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
    padding:  30px 60px 30px 60px;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    ${getColor}

    .left, .right {
      width: 50%;
      padding: 30px;
    }

    .illustration {
      max-width: 550px;
    }

    @media (max-width: ${p => p.theme.mediaQueries.tablet}) {
      justify-content: center;
      align-items: center;

      ${({ flexWrapDirection }) => flexWrapDirection === 'forwards'
      && css`
        flex-direction: column;
      `} 

      ${({ flexWrapDirection }) => flexWrapDirection === 'backwards'
      && css`
        flex-direction: column-reverse;
      `}

      .left, .right {
        width: 100%;
        padding: 30px;
      }

    }

    @media (max-width: ${p => p.theme.mediaQueries.mobile}) {
      padding:  30px 30px 30px 30px;

    }

`;

interface Props {
  backgroundColor?: string;
  flexWrapDirection?: string;
}

const Section: React.FC<Props> = ({ children, backgroundColor, flexWrapDirection }) => (
  <StyledSection backgroundColor={backgroundColor} flexWrapDirection={flexWrapDirection}>
    {children}
  </StyledSection>
)

export {
  Section
}