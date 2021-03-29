import React from 'react';
import styled from 'styled-components';

interface Props { }

const StyledCopyright = styled.small`
  width: 100%;
  display: block;
  background-color: ${p => p.theme.colors.lightgrey};
  padding: ${p => p.theme.metrics.medium};
  text-align: center;
  color: ${p => p.theme.colors.darkgrey};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copyright: React.FunctionComponent<Props> = () => {


  return (
    <StyledCopyright>
      Sesame © 2021 All Rights Reserved
    </StyledCopyright>
  );

}

export default Copyright;