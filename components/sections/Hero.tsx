import React from 'react';
import styled from 'styled-components';
import { Section } from 'components/layout/Section';


interface Props { }

const StyledHero = styled.div`
  width: 100%;

  .illustration-wrapper {
    position: relative;

    .illustration {
      width: 700px;
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
      animation: 7.5s ease-in-out infinite heroHoverCard;
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
  bottom: 125px;
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
      </StyledHero>
    </Section>
  );

}

export {
  Hero
};