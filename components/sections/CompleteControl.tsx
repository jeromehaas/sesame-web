import React from 'react';
import { Section } from 'components/layout/Section';
import { H2 } from 'components/text/Title';
import { P } from 'components/text/Paragraph';
import { space } from 'styled-system'
import { ListItemTable } from 'components/partials/ListItemTable';

const Spacer = styled.div(space);

import styled from 'styled-components';

const StyledCompleteControl = styled.div`


  .text-content {
    width: 40%;
    margin-left: 60px;
  }

  .illustration {
    width: 30%;
    /* padding: 120px; */

  }

`;

interface Props { }

const CompleteControl: React.FunctionComponent<Props> = () => {

  return (
    <Section flexWrapDirection="backwards">
      <img className="left illustration" src="/illustrations/il-complete-control.svg" alt="Customizable" />
      <div className="right">
            <Spacer mb={3} />
            <H2>Complete Control</H2>
            <Spacer mb={2} />
            <P maxWidth={'350px'}>Sesame let’s you not just give your users access and define the rules of your access-management system.You also always have an overview of which person has accessed what door at which time. Also, get further informations by having a look at the logs which get created on every action. </P>
      </div>
    </Section>
  );

}

export {
  CompleteControl
};