import React, { useState, useEffect } from 'react';
import { Section } from 'components/layout/Section';
import { H2 } from 'components/text/Title';
import { P } from 'components/text/Paragraph';
import styled from 'styled-components';
import { space } from 'styled-system';
import * as EmailValidator from 'email-validator';
import { toast } from "react-toastify";

const Spacer = styled.div(space);

interface Props { }

const StyledTable = styled.table`
  td {
    padding-right: 15px;
  }
`;

const StyledForm = styled.form`
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.metrics.large};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 2fr 50px;
  gap: 15px 15px;
  grid-template-areas:
    "firstname lastname"
    "email email"
    "role role"
    "message message"
    "submit submit";
  
  .firstname { grid-area: firstname; }
  .lastname { grid-area: lastname; }
  .email { grid-area: email; }
  .role { grid-area: role; }
  .message { grid-area: message; }
  .submit { grid-area: submit; }

  label {
    display: block;
    font-family: ${p => p.theme.fonts.regular};
    margin-bottom: ${p => p.theme.metrics.small};
    color: ${p => p.theme.colors.blue};
  }

  input, select, textarea, select {
    width: 100%;
    border: none;
    outline: none;
    border: 1px solid ${p => p.theme.colors.lightgrey};
    border-radius: 5px;
    padding: ${p => p.theme.metrics.medium} ${p => p.theme.metrics.small} ;
  }

  select {
    appearance: none;
    background: url('/icons/ic-arrow-down.svg') 96% / 15% no-repeat #FFF;
    background-size: 15px;
  };

  textarea {
    height: 85px;
    resize: none;
  }

  input[type="submit"] {
    background-color: ${p => p.theme.colors.black};
    border: none;
    outline: none;
    color: ${p => p.theme.colors.white};
    font-family: ${p => p.theme.fonts.regular};
    text-align: center;
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${p => p.theme.mediaQueries.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 2fr 50px;
    gap: 15px 15px;
    grid-template-areas:
    "firstname"
    "lastname"
    "email"
    "role"
    "message"
    "submit";
  }

`;

const ContactForm: React.FunctionComponent<Props> = () => {

  const [contactForm, setContactForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    message: '',
    sended: false
  });

  const handleContactFormFirstname = (event) => {
    setContactForm({
      ...contactForm,
      firstname: event.target.value
    });
  };

  const handleContactFormLastname = (event) => {
    setContactForm({
      ...contactForm,
      lastname: event.target.value
    });
  };

  const handleContactFormEmail = (event) => {
    setContactForm({
      ...contactForm,
      email: event.target.value
    });
  };

  const handleContactFormRole = (event) => {
    setContactForm({
      ...contactForm,
      role: event.target.value
    });
  };

  const handleContactFormMessage = (event) => {
    setContactForm({
      ...contactForm,
      message: event.target.value
    });
  };

  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    if (contactForm.firstname && contactForm.lastname && contactForm.email && contactForm.role && contactForm.message) {
      try {
        fetch('https://api.sesame-ai.tech/contactformEntries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            'firstname': contactForm.firstname,
            'lastname': contactForm.lastname,
            'email': contactForm.email,
            'role': contactForm.role,
            'message': contactForm.message
          })
        });
        setContactForm({
          firstname: '',
          lastname: '',
          email: '',
          role: '',
          message: '',
          sended: true
        });
        toast.success('Thanks for your message! We will get in touch with you soon...')
      } catch (error) {
        toast.error("Sorry, something went wrong... Please contact us directly via email!")
      }
    } else {
      toast.error("Please fill out the blank fields!")
    }
  };

    return (
      <Section backgroundColor="grey" flexWrapDirection="forwards">
      <div className="left">
        <H2>Looking for contributors</H2>
        <Spacer mb={2} />
        <P>Do you want to contribute our accesss management system? Great! We are always looking for motivated contributors which are motivated to push our access management system to the next level. Drop us a line via the contact form or contact us via email or phone.</P>
        <Spacer mb={2} />
        <StyledTable>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><P>Tel:</P></td>
            <td><a href="tel:+41795129016"><P>+41 79 512  90 16 </P></a></td>
          </tr>
          <tr>
            <td><P>E-Mail:</P></td>
            <td><a href="mailto:info@sesame-ai.tech"><P>info@sesame-ai.tech</P></a></td>
          </tr>
          </tbody>
        </StyledTable>
      </div>
      <div className="right">
          <StyledForm onSubmit={(event) => handleContactFormSubmit(event)}>
          <div className="input-field firstname">
            <label htmlFor="firstname">Firstname</label>
              <input type="text" value={contactForm.firstname} onChange={(event) => handleContactFormFirstname(event)} />
          </div>
          <div className="input-field lastname">
            <label htmlFor="lastname">Lastname</label>
              <input type="text" value={contactForm.lastname} onChange={(event) => handleContactFormLastname(event)} />
          </div>
          <div className="input-field email">
              <label htmlFor="email">Email</label>
              <input type="email" value={contactForm.email} onChange={(event) => handleContactFormEmail(event)} />
          </div>
          <div className="input-field role">
            <label htmlFor="role">In which role would you like to contribute?</label>
              <select value={contactForm.role} onChange={(event) => handleContactFormRole(event)}>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Database">Database</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
          <div className="input-field message">
            <label htmlFor="message">Message</label>
              <textarea rows={2} value={contactForm.message} onChange={(event) => handleContactFormMessage(event)} />
          </div>
          <input className="submit-button submit" type="submit" value="Submit" />
        </StyledForm>
      </div>
    </Section>
  );

}

export {
  ContactForm
};