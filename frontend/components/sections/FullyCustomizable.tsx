import React from 'react';
import { Section } from 'components/layout/Section';
import { H2 } from 'components/text/Title';
import { P } from 'components/text/Paragraph';
import { space } from 'styled-system'
import { ListItemTable } from 'components/partials/ListItemTable';
import styled from 'styled-components';

const Spacer = styled.div(space);

const listItemData = [
  { text: 'Define Groups' },
  { text: 'Add areas and doors' },
  { text: 'Customize accessible hours' },
  { text: 'Activate / deactivate users' },
  { text: 'Update and edit users' },
];

interface Props { }

const FullyCustomizable: React.FunctionComponent<Props> = () => {

  return (
    <Section backgroundColor="grey" flexWrapDirection="forwards">
      <div className="left">
            <H2>Fully Customizable</H2>
            <Spacer mb={2} />
            <P maxWidth={'350px'}>The application is fully customizable and let’s you define all aspects of your access management. </P>
            <Spacer mb={2} />
            <ListItemTable data={listItemData} />
          </div>
      <img className="right illustration" src="/illustrations/il-fiully-customizable.svg" alt="Customizable" />
    </Section>
  );

}

export {
  FullyCustomizable
};