import React, {Fragment} from 'react';
import Head from 'next/head'
import { H1 } from 'components/text/Title';
import { P } from 'components/text/Paragraph';
import { ListItem } from 'components/text/ListItem';
import { Page } from 'components/layout/Page';
import { Section } from 'components/layout/Section';
import { Hero } from 'components/sections/Hero';
import { Advantages } from 'components/partials/Advantages';
import { FullyCustomizable } from 'components/sections/FullyCustomizable';
import { CompleteControl } from 'components/sections/CompleteControl';
import { EasyToUse } from 'components/sections/EasyToUse';
import { Newsletter } from 'components/sections/Newsletter';
import { ContactForm } from 'components/sections/ContactForm';
import { Footer } from 'components/partials/Footer';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Sesame</title>
        <meta name="description" content="Access management system for the 21th century"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
        <meta name="author" content="Jérôme Haas" />
        <link rel="icon" href="favicon/favicon.png" />
      </Head>
    <Page>
    
        <Hero />
        <Advantages /> 
        <FullyCustomizable />
        <CompleteControl />
        <EasyToUse />
        <Newsletter />
        <ContactForm />
        <Footer />

    </Page>
    </Fragment>
  )
};