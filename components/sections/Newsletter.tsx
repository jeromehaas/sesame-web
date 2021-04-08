import React from 'react';
import { Section } from 'components/layout/Section';
import { P } from 'components/text/Paragraph';
import styled from 'styled-components';
import { space } from 'styled-system';

const Spacer = styled.div(space);

interface Props { }

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  align-self: center;
  justify-self: center;

  .input-fields {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .input-field, .submit-button {
    padding: 15px;
    border-radius: 5px;
    z-index: 5;
    margin-bottom: 15px;
  }

  .input-field {
    background-color: ${p => p.theme.colors.white};
    width: 300px;
    margin-right: 15px;

    img {
      width: 15px;
    }

    input[type="email"] {
      border: none;
      padding-left: 15px;
      color: ${p => p.theme.colors.darkgrey};
      width: calc(100% - 15px);
      font-family: ${p => p.theme.fonts.regular};
      
    }

  } // <-- END OF INPUT-FIELD CLASS
  
  .submit-button {
    background-color: ${p => p.theme.colors.black};

    input[type="submit"] {
      background-color: ${p => p.theme.colors.black};
      outline: none;
      border: none;
      color: ${p => p.theme.colors.white};
      width: 75px;
      font-family: ${p => p.theme.fonts.regular};
    }
    
  } // <-- END OF SUBMIT-BUTTON CLASS

  @media (max-width: 520px) {
    
    .input-field,
    .submit-button {
      width: 100%;
      margin-right: 0;
    }
    
    .input-fields {
      flex-direction: column;

      input[type="email"] {
        text-align: center;
        padding-right: 30px;
      }
    }

    .submit-button {
      text-align: center;
    }

  }

`;

const CircleLeft = styled.img`
  position: absolute;
  width: 300px;
  bottom: -150px;
  left: -150px;
  animation: rotateLeft 10s linear infinite;

  @keyframes rotateLeft {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }

`;

const CircleRight = styled.img`
  position: absolute;
  width: 300px;
  top: -150px;
  right: -150px;
  animation: rotateRight 10s linear infinite;

@keyframes rotateRight {
      0% {transform: rotate(360deg);}
      100% {transform: rotate(0deg);}
  }


`;

const Newsletter: React.FunctionComponent<Props> = () => {

  return (
    <Section backgroundColor="red">
      <CircleLeft src="/shapes/sh-circle.svg" alt="Circle" />
      <CircleRight src="/shapes/sh-circle.svg" alt="Circle" />
      <NewsletterForm>
        <P color="white" fontWeight="bold" textAlign="center">Input your email into form below to get updates from us.</P>
        <Spacer mb={2} />
        <div className="input-fields">
          <div className="input-field">
            <img src="/icons/ic-email.svg" alt="Email" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="submit-button">
            <input type="submit" />
          </div>
        </div>
      </NewsletterForm>
    </Section>
  );

}

export {
  Newsletter
};