import React from 'react';
import { Section } from 'components/layout/Section';
import { H2 } from 'components/text/Title';
import { P } from 'components/text/Paragraph';
import { space } from 'styled-system'
import { ListItemTable } from 'components/partials/ListItemTable';
import { Limiter } from 'components/layout/Limiter';


const Spacer = styled.div(space);

import styled from 'styled-components';

const StyledFullyCustomizable = styled.div`

  ${Limiter} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0 auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: calc(100% - 500px);
    z-index: -5;
    background-color: ${p => p.theme.colors.lightgrey};
  }

  .text-content {
    width: 40%;
  }

  .illustration {
    width: 50%;
  }

`;

const listItemData = [
  { text: 'Define Groups' },
  { text: 'Add areas and doors' },
  { text: 'Customize accessible hours' },
  { text: 'Activate / deactivate users' },
  { text: 'Update and edit users' },
]

interface Props { }

const FullyCustomizable: React.FunctionComponent<Props> = () => {

  return (
    <Section>
      <StyledFullyCustomizable>
        <div className="overlay" />
        <Limiter>
          <div className="text-content">
            <Spacer mb={3} />
            <H2>Fully Customizable</H2>
            <Spacer mb={2} />
            <P>The application is fully customizable and let’s you define all aspects of your access management. </P>
            <Spacer mb={2} />
            <ListItemTable data={listItemData} />
          </div>
          <img className="illustration" src="/illustrations/il-fiully-customizable.svg" alt="Customizable" />
        </Limiter>
      </StyledFullyCustomizable>
    </Section>
  );

}

export {
  FullyCustomizable
};