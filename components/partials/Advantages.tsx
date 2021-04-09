import React, { Fragment } from 'react';
import styled from 'styled-components';
import { P } from 'components/text/Paragraph';
import { Section } from 'components/layout/Section';

const advantagesData = [
  { icon: '/advantages/ad-protocol.svg', alt: 'Protocol', text: 'See the entries of all time in the protocol' },
  { icon: '/advantages/ad-permissions.svg', alt: 'Permissions', text: 'Adjust the permissions with a few clicks' },
  { icon: '/advantages/ad-control.svg', alt: 'Protocol', text: 'Have complete control over who can access which facilities' },
  { icon: '/advantages/ad-management.svg', alt: 'Protocol', text: 'Get an overview of the access management of your organisation' },
];

const StyledAdvantages = styled.div`

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .advantage {
    width: 25%;
    padding: 30px 30px;
  }

  .icon {
    margin: 0 auto;
    display: block;
    margin-bottom: 15px;
    width: 90px;
  }

  @media (max-width: ${p => p.theme.mediaQueries.tablet}) {
    .advantage {
      width: 50%;
    }

  }

  @media (max-width: 570px) {
    .advantage {
      width: 100%;
      max-width: 250px;
    }

  }

`;

interface Props { }

const Advantages: React.FunctionComponent<Props> = () => {

  return (
    <Section>
      <StyledAdvantages>

          {advantagesData.map((advantage, index) => (
            <div className="advantage" key={index}>
              <img className="icon" src={advantage.icon} alt={advantage.alt} />
              <P textAlign="center">{advantage.text}</P>
            </div>
          ))}

      </StyledAdvantages>
    </Section >
  );

}

export {
  Advantages
};