import React from 'react';
import styled from 'styled-components';

interface Props { }

const StyledHeader = styled.header`
  width: 100%;
  padding: 0 ${p => p.theme.metrics.medium};
  
  .logo {
    width: 150px;
    margin: 0 auto;
    display: block;
    height: 65px;
    display: flex; 
    align-items: center;
    justify-content: center;
  }

`;

const Header: React.FunctionComponent<Props> = () => {


  return (
    <StyledHeader>
      <img className="logo" src="/logos/logo.svg" alt="Sesame" />
    </StyledHeader>
  );

}

export default Header;