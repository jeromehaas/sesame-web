import React from 'react';
import styled from 'styled-components';
import { Anchor } from 'components/text/Link';
import ProgressBar from "react-scroll-progress-bar";

interface Props { }

const StyledHeader = styled.header`
  width: 100%;
  height: 85px;
  display: block;

  .logo {
    z-index: 5;
    position: fixed;
    top: 0;
    width: 100%;
    height: 85px;
    padding: 0 ${p => p.theme.metrics.medium};
    background-color: ${p => p.theme.colors.lightgrey};

    img {
        width: 200px;
        margin: 0 auto;
        display: block;
        display: flex; 
        align-items: center;
        justify-content: center;
    }

  }

  .placeholder {
    height: 85px;
    width: 100%;
    display: block;
  }

`;

const Header: React.FunctionComponent<Props> = () => {


  return (
    <>
    <StyledHeader>
      <Anchor target="/">
      <div className="logo">
        <img src="/logos/logo.svg" alt="Sesame" />
      </div>
          <ProgressBar bgcolor='#B00E23' height="2px" />
        <div className="placeholder" />
      </Anchor>
    </StyledHeader>
    </>
  );

}

export default Header;
