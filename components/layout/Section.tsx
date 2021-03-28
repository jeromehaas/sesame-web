import { redirect } from 'next/dist/next-server/server/api-utils';
import styled, { css } from 'styled-components';
import { P } from '../text/Paragraph';

const StyledSection = styled.div`
  width: 100%;
  position: relative;
  /* padding: ${p => p.theme.metrics.large}; */
`;

const StyledSectionWrapper = styled.div`
    width: 100vw;
    height: 100%;
`;

const StyledSectionBackground = styled.div`
    width: calc(100vw - ((100vw - 1840px) / 2));
    height: 100%;

  ${({ direction }) => direction === 'right'
    && css`
        position: absolute;
        left: 0;
        background-color: ${p => p.theme.overlayColor.black};
      `}

  ${({ direction }) => direction === 'left'
    && css`
        position: absolute;
        right: 0px;
        background-color: ${p => p.theme.overlayColor.black};
      `}
`;

const StyledSectionContent = styled.div`
    padding: 30px;
`;

const Section = ({ direction, children }) => (
  <StyledSection>
    <StyledSectionWrapper >
      <StyledSectionBackground direction={direction} />
      <StyledSectionContent>
        {children}
      </StyledSectionContent>
    </StyledSectionWrapper>
  </StyledSection>
)

export {
  Section
}