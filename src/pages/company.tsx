import AboutOffice from '@components/sections/Company/AboutOffice';
import GotQuestion from '@components/sections/Company/GotQuestion';
import HeroBanner from '@components/sections/Company/HeroBanner';
import InfoBlock from '@components/sections/Company/InfoBlock';
import { GradientBg } from '@pages/index';

import Footer from '@components/templates/Footer';
import Transition from '@components/templates/Transition/transition';
import Layout from '@components/templates/Layout';
import Header from '@components/templates/Header';
import { graphql } from 'gatsby';

const Company = () => (
    <Layout>
        <Header />
        <Transition backgroundColor='blue' shortened/>
        <HeroBanner />
        <GradientBg>
            <InfoBlock />
            <AboutOffice />
            {/* <Specialists /> */}
            <GotQuestion />
            <Footer />
        </GradientBg>
    </Layout>
);

export default Company;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["company", "header"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;