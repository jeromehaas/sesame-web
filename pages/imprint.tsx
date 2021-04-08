import React, { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Page } from 'components/layout/Page';
import { Footer } from 'components/partials/Footer';
import { H2, H3 } from 'components/text/Title';
import { Section } from 'components/layout/Section';
import { P } from 'components/text/Paragraph';
import { space } from 'styled-system';

const Spacer = styled.div(space);

interface Props { }

const StyledPrivacy = styled.div`
  width: 100%;  

  .paragraph {
    margin: ${p => p.theme.metrics.medium} 0;
  }

  ${H3}
`;

const imprint: React.FunctionComponent<Props> = () => {


  return (
    <Fragment>
      <Page>
        <Section>
          <StyledPrivacy>
            <Spacer mb={4} />
            <H2>Imprint</H2>
            <Spacer mb={4} />
            <div className="paragraph">
              <H3>Publisher</H3>
              <P>Sesame</P>
              <P>Tel: +41 79 512 90 16</P>
              <P>E-Mail: info@sesame-ai.tech</P>
            </div>
            <div className="paragraph">
              <H3>Liability statement</H3>
              <P>Despite careful control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.</P>
            </div>
            <div className="paragraph">
              <H3>Disclaimer</H3>
              <P>The author assumes no responsibility for the correctness, accuracy, timeliness, reliability and completeness of the information. Liability claims regarding damage caused by the use of any information provided, including any kind of information which is incomplete or incorrect, will therefore be rejected. All offers are non-binding. The author expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without prior notice, or to cease publication temporarily or permanently.</P>
            </div>
            <div className="paragraph">
              <H3>Copyright image and text</H3>
              <P>Please do not use any text, photos, logos or other content from our website and pass them off as your own. Please also do not use the content without a connection to Viva con Agua Switzerland. All logos and images are owned by Viva con Agua Switzerland. If you wish to use text, photos or other content from our website, please contact our office. The further use of images and text of any kind requires the written consent of Sesame and is only permitted if the copyright information is mentioned. The use of the Sesame logo also requires the written consent of Sesame. Thank you very much.</P>
            </div>
          </StyledPrivacy>
        </Section>
        <Footer />
      </Page>
    </Fragment >
  );

}

export default imprint;