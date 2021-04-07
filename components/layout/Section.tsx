import { redirect } from 'next/dist/next-server/server/api-utils';
import styled, { css } from 'styled-components';
import { P } from '../text/Paragraph';

const StyledSection = styled.div`
    width: 100vw;
    height: 100%;
    padding:  30px 60px 30px 60px;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.backgroundColor === "grey" ? p.theme.colors.lightgrey : null};

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