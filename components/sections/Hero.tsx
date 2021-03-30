import React from 'react';
import styled from 'styled-components';
import { Section } from 'components/layout/Section';
import { H1 } from 'components/text/Title';
import { space } from 'styled-system'
import { P } from 'components/text/Paragraph';

const Spacer = styled.div(space);

interface Props { }

const StyledHero = styled.div`
  width: 100%;

  .illustration-wrapper {
    position: relative;
    width: 700px;
    margin: 0 auto;

    .illustration {
      width: 100%;
      margin: 0 auto;
      display: block;
    }


    .card {
      position: absolute;
      left: 40%;
      bottom: 30px;
      width: 100px;
      border-radius: 7.5px;
      box-shadow: -7.5px 7.5px 0 ${p => p.theme.overlayColor.red};
      animation: 7.5s ease-in-out -0.5s infinite heroHoverTotalUser;

    }

    .total-user {
      position: absolute;
      right: 20%;
      top: 125px;
      width: 100px;
      border-radius: 7.5px;
      box-shadow: -7.5px 7.5px 0 ${p => p.theme.overlayColor.red};
      animation: 10.5s ease-in-out infinite heroHoverCard;
    }

    @keyframes heroHoverCard {
        0% { top: 125px; }
        50% { top: 140px; }
        100% { top: 125px; }
    }
    
    @keyframes heroHoverTotalUser {
        0% { bottom: 30px; }
        50% { bottom: 45px; }
        100% { bottom: 30px; }
    }

  }

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: calc(100% - 400px);
  z-index: -5;
  background-color: ${p => p.theme.colors.lightgrey};
}
`;

const Hero: React.FunctionComponent<Props> = () => {

  return (
    <Section>
      <StyledHero>
        <div className="overlay" />
        <div className="illustration-wrapper">
          <img className="illustration" src="/illustrations/il-hero.svg" alt="Illustration" />
          <img className="card" src="/illustrations/il-card.svg" alt="Card" />
          <img className="total-user" src="/illustrations/il-total-user.svg" alt="Total User" />
        </div>
        <Spacer mb={3} />
        <H1 textAlign="center">Access management system for the 21th century</H1>
        <Spacer mb={3} />
        <P>Sesame is a non-profit  open source access management system for organisations. The main goal of sesame is to provide an easier way to give  the users of your organisationsto different rooms and areas of your organisation.  By using our mobile application, users can just scan their face  to authorize and to open doors. </P>
        <Spacer mb={3} />
      </StyledHero>
    </Section>
  );

}

export {
  Hero
};