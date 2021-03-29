import React from 'react';
import styled from 'styled-components';
import Header from 'components/partials/Header';
import Copyright from 'components/partials/Copyright';

const StyledPage = styled.div`
  margin: 0 auto;
  overflow: scroll;
`;

const StyledPageContentWrapper = styled.main`
  min-height: calc(100vh - (50px + 65px));
`;

const Page = ({ children }) => (
  <StyledPage>
    <Header />
    <StyledPageContentWrapper>
      {children}
    </StyledPageContentWrapper>
    <Copyright />
  </StyledPage>
)

export {
  Page
};