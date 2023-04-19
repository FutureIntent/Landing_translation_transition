import HeroBanner from '@components/sections/Home/1.HeroBanner';
import Solutions from '@components/sections/Home/2.Solutions';
import Methodology from '@components/sections/Home/3.Methodology';
import MethodologyMobile from '@components/sections/Home/3.MethodologyMobile';
import OurWorks from '@components/sections/Home/6.OurWorks';
import OurSpecialists from '@components/sections/Home/7.OurSpecialists';
import ContactUs from '@components/sections/Home/8.ContactUs';
import Services from '@components/sections/Home/Services';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import styled from 'styled-components';

import ModalProvider from '@providers/ModalProvider';

import { useGsap } from '@hooks';

import SectionNavigation from '@components/molecules/SectionNavigation';

import Footer from '@components/templates/Footer';
import Transition from '@components/templates/Transition/transition';
import { graphql } from 'gatsby';
import Layout from '@components/templates/Layout';
import Header from '@components/templates/Header';

export const GradientBg = styled.div`
    background: ${({ theme }) => theme.colors.gradient.background};
    overflow: hidden;
    position: relative;

    #methodology::-webkit-scrollbar {
        display: none;
    }
`;

const GsapAnimation = () => {
    useGsap();

    return <></>;
};

const Index = () => {
    const { isTablet, isLaptopS } = useBreakpoint();

    return (
        <Layout>
            <Header />
            <ModalProvider>
                <Transition backgroundColor='black' />
                <SectionNavigation />
                <HeroBanner />
                <Solutions />
                <GradientBg>
                    <Services />
                    {isLaptopS ? <Methodology /> : <MethodologyMobile />}
                    <OurWorks />
                    <OurSpecialists />
                    <ContactUs />
                    <Footer />
                </GradientBg>
                {isTablet && <GsapAnimation />}
            </ModalProvider>
        </Layout>
    );
};

export default Index;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["home", "header"]}, language: {eq: $language}}) {
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