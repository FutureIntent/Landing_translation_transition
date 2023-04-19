import HeroBanner from '@components/sections/Works/HeroBanner';
import ProjectList from '@components/sections/Works/ProjectList';

import Footer from '@components/templates/Footer';
import Header from '@components/templates/Header';
import Layout from '@components/templates/Layout';
import Transition from '@components/templates/Transition/transition';
import { graphql } from 'gatsby';

const WorksPage = () => (
    <Layout>
        <Header />
        <Transition backgroundColor='red' shortened/>
        <HeroBanner />
        <ProjectList />
        <Footer />
    </Layout>
);

export default WorksPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["works", "header"]}, language: {eq: $language}}) {
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