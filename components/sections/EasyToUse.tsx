import React from 'react';
import { Section } from 'components/layout/Section';
import { H2 } from 'components/text/Title';
import { P } from 'components/text/Paragraph';
import { space } from 'styled-system'
import { ListItemTable } from 'components/partials/ListItemTable';
import { Limiter } from 'components/layout/Limiter';


const Spacer = styled.div(space);

import styled from 'styled-components';

const StyledEasyToUse = styled.div`

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
    left: 60px;
    bottom: calc(100% - 550px);
    z-index: -5;
    background-color: ${p => p.theme.colors.lightgrey};
  }

  .text-content {
    width: 50%;
  }

  .illustration {
    width: 50%;
  }

`;

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
    <Section>
      <StyledEasyToUse>
        <div className="overlay" />
        <Limiter>
          <div className="text-content">
            <Spacer mb={3} />
            <H2>Easy to Use</H2>
            <Spacer mb={2} />
            <P maxWidth={'350px'}>The dashboard is intuitive and easy to use. Setting up our access managment system can be done within some hours and needs no prior knowledge to getting started with the admin dashboard.</P>
            <Spacer mb={2} />
            <ListItemTable data={listItemData} />
          </div>
          <img className="illustration" src="/illustrations/il-easy-to-use.svg" alt="Customizable" />
        </Limiter>
        <Spacer mb={4} />
      </StyledEasyToUse>
    </Section>
  );

}

export {
  EasyToUse
};