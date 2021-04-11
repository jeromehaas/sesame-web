import React from 'react';
import { Section } from 'components/layout/Section';
import { H2 } from 'components/text/Title';
import { P } from 'components/text/Paragraph';
import { space } from 'styled-system'
import { ListItemTable } from 'components/partials/ListItemTable';

const Spacer = styled.div(space);

import styled from 'styled-components';

const listItemData = [
  { text: 'Intuitive' },
  { text: 'Fast' },
  { text: 'Cross plattform compatible' },
  { text: 'Easy to onboard' },
  { text: 'Mobile and tablet friendly' },
]

interface Props { }

const EasyToUse: React.FunctionComponent<Props> = () => {

  return (
    <Section backgroundColor="grey" flexWrapDirection="forwards">
      <div className="left">
            <H2>Easy to Use</H2>
            <Spacer mb={2} />
            <P maxWidth={'350px'}>The dashboard is intuitive and easy to use. Setting up our access managment system can be done within some hours and needs no prior knowledge to getting started with the admin dashboard.</P>
            <Spacer mb={2} />
            <ListItemTable data={listItemData} />
          </div>
      <img className="right illustration" src="/illustrations/il-easy-to-use.svg" alt="Customizable" />
    </Section>
  );

}

export {
  EasyToUse
};