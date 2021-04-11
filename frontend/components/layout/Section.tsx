import { redirect } from 'next/dist/next-server/server/api-utils';
import styled, { css } from 'styled-components';
import { Fade } from "react-awesome-reveal";

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
    padding:  90px 60px 90px 60px;
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
    }

    .left {
      padding-right: 30px;
    }

    .right {
      padding-left: 30px;
    }

    .illustration {
      max-width: 550px;
    }

    @media (max-width: ${p => p.theme.mediaQueries.tablet}) {
      justify-content: center;
      align-items: center;
      padding:  30px;

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
        padding: 0 0 60px 0;
      }

    }

`;

interface Props {
  backgroundColor?: string;
  flexWrapDirection?: string;
}

const Section: React.FC<Props> = ({ children, backgroundColor, flexWrapDirection }) => (

  <Fade triggerOnce={true} duration={1500} fraction={0.15}>
  <StyledSection backgroundColor={backgroundColor} flexWrapDirection={flexWrapDirection}>
      {children}
  </StyledSection>
  </Fade>
)

export {
  Section
}