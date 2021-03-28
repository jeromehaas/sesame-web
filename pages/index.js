import Head from 'next/head'
import { H1 } from 'components/text/Title';
import { P } from 'components/text/Paragraph';
import { ListItem } from 'components/text/ListItem';
import { Page } from 'components/layout/Page';
import { Section } from 'components/layout/Section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="favicon/favicon.png" />
      </Head>
    <Page>
      <Section direction={'left'}>
        helo
      </Section> 
      <Section direction={'right'}>
        bye  
      </Section> 
    </Page>
    </div>
  )
};