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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sesame</title>
        <meta name="description" content="Access management system for the 21th century"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jérôme Haas" />
        <link rel="icon" href="favicon/favicon.png" />
      </Head>
    <Page>
      <Fragment>
        <Hero />
        <Advantages /> 
        <FullyCustomizable />
      </Fragment>
    </Page>
    </div>
  )
};