import React from 'react';
import { Section } from 'components/layout/Section';
import styled from 'styled-components';
import { P } from 'components/text/Paragraph';
import { Anchor } from 'components/text/Link';
import { space } from 'styled-system';


const Spacer = styled.div(space);

interface Props { }

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 150px;
  }
`;

const Footer: React.FunctionComponent<Props> = () => {

  return (
    <Section>
      <StyledFooter>
        <Spacer mb={2} />
        <Anchor target="/">
          <img src="logos/logo-no-whitespace.svg" alt="Sesame" />
        </Anchor>
        <Spacer mb={2} />
        <P maxWidth="10px">Access management system for the 21th centuryt</P>
        <Spacer mb={3} />
        <Anchor target="/privacy">Privacy Policy</Anchor>
        <Anchor target="/imprint">Imprint</Anchor>
        <Spacer mb={2} />
      </StyledFooter>
    </Section>
  );

}

export {
  Footer
};
