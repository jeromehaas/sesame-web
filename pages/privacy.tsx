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

const privacy: React.FunctionComponent<Props> = () => {


  return (
    <Fragment>
      <Page>
        <Section>
          <StyledPrivacy>
            <Spacer mb={4} />
            <H2>Privacy Policy</H2>
            <Spacer mb={4} />
            <div className="paragraph">
              <H3>Data Protection Act</H3>
              <P>Based on Article 13 of the Swiss Federal Constitution and the data protection regulations of the Swiss Confederation (Data Protection Act, DSG), every person has the right to protection of their privacy as well as protection against misuse of their personal data. We comply with these provisions. Personal data is treated as strictly confidential and is neither sold nor passed on to third parties. In close cooperation with our hosting providers, we strive to protect the databases as well as possible against unauthorized access, loss, misuse or falsification. When you access our web pages, the following data is stored in log files: IP address, date, time, browser request and general transmitted information about the operating system or browser. This usage data forms the basis for statistical, anonymous evaluations so that trends can be identified, which we can use to improve our offerings accordingly.</P>
            </div>
            <div className="paragraph">
              <H3>General information on data processing</H3>
              <P>The protection of your data is important to us. We respect your privacy and are committed to ensuring that your data is processed in accordance with the applicable laws, regardless of whether you provide us with your data electronically, by post or by telephone. As a matter of principle, we only process personal data insofar as this is necessary to provide a functioning website and our content and services. The processing of personal data of the data subject is only carried out after and with your consent. An exception applies in those cases where obtaining prior consent is not possible for factual reasons and the processing of the data is permitted by legal regulations. With this privacy policy we inform you comprehensively about our data processing.</P>
            </div>
            <div className="paragraph">
              <H3>Processing of personnel data</H3>
              <P>Based on Article 13 of the Swiss Federal Constitution and the data protection regulations of the Swiss Confederation (Data Protection Act, DSG), every person has the right to protection of their privacy as well as protection against misuse of their personal data. We comply with these provisions. Personal data is treated as strictly confidential and is neither sold nor passed on to third parties. In close cooperation with our hosting providers, we strive to protect the databases as well as possible against unauthorized access, loss, misuse or falsification. When you access our web pages, the following data is stored in log files: IP address, date, time, browser request and general transmitted information about the operating system or browser. This usage data forms the basis for statistical, anonymous evaluations so that trends can be identified, which we can use to improve our offerings accordingly.</P>
            </div>
            <div className="paragraph">
              <H3>Data Protection Act</H3>
              <P>Processing of personal data includes e.g. the:</P>
              <P>- collection</P>
              <P>- storage</P>
              <P>- transmission</P>
              <P>- disclosure</P>
              <P>- deletion</P>
              <P>of personell data.</P>
              <Spacer mb={2} />
              <P>We collect personal data that you provide to us on the one hand and on the other hand such data that is automatically or manually collected during your visit to our website. These are, for example:</P>
              <P>- Name and first name</P>
              <P>- Residence address</P>
              <P>- Date of birth</P>
              <P>- Gender</P>
              <P>- E-mail address</P>
              <P>- Telephone numbers</P>
              <P>- Donations (amount, date, event, purpose)</P>
              <P>- Activities on the Sesame website (store etc.)</P>
              <P>- IP address of technical devices</P>
              <P>- Consent to receive newsletters or other information</P>
              <P>- Contract data (in connection with our offers)</P>
              <P>- Customer service information</P>
              <P>- Communication via telephone and e-mail</P>
              <P></P>
            </div>
            <div className="paragraph">
              <H3>Use of personnel data</H3>
              <P>We process your personal data primarily for the purpose stated when it was collected. E.g. to subscribe to our newsletter or to answer your inquiries or for our online store.</P>
              <P>In addition, we also process your data for marketing purposes within the scope of applicable laws. For example, we process your personal data for the following processing purposes in connection with:</P>
              <P>- the provision of our goods or services, namely memberships</P>
              <P>- the organization and execution of customer communication (by mail or electronic means of communication)</P>
              <P>- the business communication by mail, telephone or e-mail</P>
              <P>- the evaluation of the use of our offers via telephone or e-mail</P>
              <P>- the analysis of customer behavior included</P>
            </div>
            <div className="paragraph">
              <H3>To whom does the personal data go on?</H3>
              <P>We forward your data, if necessary for the purposes stated here in the data protection declaration, to third parties, e.g. in order to use technical or organizational services which we require for the fulfillment of the stated purposes or our other business activities. Our service providers are obliged to process personal data exclusively on our behalf and in accordance with our instructions. We oblige our service providers to comply with technical and organizational measures that ensure the protection of personal data.</P>
            </div>
            <div className="paragraph">
              <H3>Duration of the retention of personal data</H3>
              <P>The personal data of the data subject shall be deleted or blocked as soon as the purpose of the storage ceases to apply.</P>
            </div>
            <div className="paragraph">
              <H3>Logging</H3>
              <P>Each time our website is accessed, our system automatically collects data and information from the computer system of the accessing computer. Each time the pages of Sesame are accessed, usage data is transmitted by the respective Internet browser and stored in log files, the so-called server log files. The data records stored in this process contain the following data: Date and time of the retrieval, name of the page accessed, IP address, referrer URL (origin URL from which you came to the web pages), the amount of data transferred, as well as product and version information of the browser used. We evaluate these log file data records in order to further improve our offer on the Sesame website and to make it more user-friendly, to find and correct errors more quickly and to control server capacities. At the same time, we use the log file data records to defend against attacks on our Sesame website, e.g. in the context of so-called distributed denial of service attacks, which aim to block access to our Sesame website by overloading it with requests. Exactly which data is collected is listed in the sections on the individual analysis tools.</P>
            </div>
            <div className="paragraph">
              <H3>Purpose and duration of data processing</H3>
              <P>The temporary storage of the IP address by the system is necessary to enable delivery of the website to the user's computer. For this purpose, the IP address of the user must remain stored for the duration of the session. The data is deleted as soon as it is no longer required to achieve the purpose for which it was collected.</P>
            </div>
            <div className="paragraph">
              <H3>Possibility of objection and removal</H3>
              <P>The collection of data for the provision of the website and the storage of the data in log files is absolutely necessary for the operation of the website. Consequently, there is no possibility for the user to object.</P>
            </div>
            <div className="paragraph">
              <H3>Cookies</H3>
              <P>The Internet pages partly use so-called cookies. Cookies do not cause any damage to your computer and do not contain viruses. Cookies serve to make our offer more user-friendly, more effective and safer. Cookies are small text files that are stored on your computer and saved by your browser.
              Most of the cookies we use are so-called "session cookies". They are automatically deleted after the end of your visit. Other cookies remain stored on your terminal device until you delete them. These cookies allow us to recognize your browser on your next visit.
              You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of this website may be limited. Cookies that are required to carry out the electronic communication process or to provide certain functions requested by you (e.g. shopping cart function) are stored. The website operator has a legitimate interest in storing cookies for the technically error-free and optimized provision of its services. Insofar as other cookies (e.g. cookies for analyzing your surfing behavior) are stored, these are treated separately in this data protection declaration.</P>
            </div>
            <div className="paragraph">
              <H3>Privacy policy for the use of Google Adsense</H3>
              <P>This website uses Google AdSense, an advertising integration service provided by Google Inc. ("Google"). Google AdSense uses "cookies", which are text files placed on your computer, to help the website analyze how users use the site. Google AdSense also uses so-called web beacons (invisible graphics). Through these web beacons, information such as visitor traffic on these pages can be analyzed. The information generated by cookies and web beacons about the use of this website (including your IP address) and delivery of advertising formats will be transmitted to and stored by Google on servers in the United States. This information may be passed on by Google to contractual partners of Google. However, Google will not merge your IP address with other data stored by you. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.</P>
            </div>
            <div className="paragraph">
              <H3>Privacy policy for the use of Google Analytics</H3>
              <P>This website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. In the event that IP anonymization is activated on this website, however, your IP address will be truncated beforehand by Google within member states of the European Union or in other contracting states to the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. The IP address transmitted by your browser as part of Google Analytics will not be merged with other data from Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.</P>
            </div>
            <div className="paragraph">
              <H3>Liability for links</H3>
              <P>Sesame hereby expressly declares that at the time of linking, no illegal content was discernible on the linked pages. Sesame has no influence on the current and future design, content or authorship of the linked pages. Therefore, it hereby expressly dissociates itself from all contents of all linked/connected pages that were changed after the link was set. This statement applies to all links and references set within its own Internet offer. For illegal, incorrect or incomplete contents and especially for damages resulting from the use or non-use of such information, only the provider of the linked site is liable, not the one who has linked to the respective publication. This data protection declaration is currently valid and has the status February 2021. Due to the further development of our website and offers on it or due to changed legal or official requirements, it may become necessary to change this data protection declaration. You can access and print out the current data protection declaration at any time on the website under the link www.waterisahumanright.ch.</P>
            </div>
            <div className="paragraph">
              <H3>Actuality and change of this privacy policy</H3>
              <P>This privacy policy is currently valid and has the status April 2021.</P>
            </div>
            <div className="paragraph">
              <H3>Privacy policy for the use of Google Analytics</H3>
              <P>This website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. In the event that IP anonymization is activated on this website, however, your IP address will be truncated beforehand by Google within member states of the European Union or in other contracting states to the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. The IP address transmitted by your browser as part of Google Analytics will not be merged with other data from Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.</P>
            </div>
            <div className="paragraph">
              <H3>Privacy policy Sesame</H3>
              <P>This privacy policy contains general information on how Sesame handles your data as well as information on your rights under the European Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).</P>
            </div>
          </StyledPrivacy>
        </Section>
        <Footer />
      </Page>
    </Fragment >
  );

}

export default privacy;