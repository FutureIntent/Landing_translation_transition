import * as React from 'react';
import styled from 'styled-components';

import theme from '@theme/configs';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Form from '@components/atoms/Form/Form';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import Envelope from '@components/molecules/Icons/Envelope';
import MapBG from '@components/molecules/Icons/MapBG';
import Phone from '@components/molecules/Icons/Phone';

import Footer from '@components/templates/Footer';
import Transition from '@components/templates/Transition/transition';
import { graphql } from 'gatsby';
import { useEffect } from 'react';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '@components/templates/Layout';
import Header from '@components/templates/Header';

const MapStyled = styled.div`
    svg {
        left: -487px;
        position: absolute;
        top: -750%;
        width: 790%;

        ${mediaQueries.tablet} {
            left: -650px;
            top: -650%;
        }

        ${mediaQueries.laptop} {
            left: -145%;
            top: -550%;
            width: 690%;
        }
    }
`;

const StyledSection = styled(Section)`
    background-color: ${theme.colors.light.black};
    height: unset;
    overflow: hidden;
    padding-bottom: var(--footer-height);
    position: relative;
`;

const ContactsPage = () => {

    const {changeLanguage} = useI18next();
    const {t} = useTranslation();


    // Temporary expression for testing languages (until language switcher component is added)
    useEffect(()=> {
        changeLanguage('ru');
    }, []);
    
    return(
        <Layout>
            <Header />
            <StyledSection id="contact-us">
                <Transition backgroundColor='SpringGreen' shortened />
                <Container display="flex" alignItems="center" flexDirection="column">
                    <Box mt={140} position="relative" zIndex={9}>
                        <Typography
                            fontSize={{ _: 36, tablet: 94 }}
                            textAlign="center"
                            variant="h1"
                            color="commons.white"
                            mb={{ _: 30, tablet: 60 }}
                    >
                            {t('contacts.header')}
                        </Typography>
                        <Box
                            display="flex"
                            alignItems="center"
                            mb={120}
                            flexWrap="wrap"
                            gridGap={{ _: 30, tablet: 100 }}
                >
                            <a href="mailto:manager@advertimo.eu">
                                <Envelope size={{ _: 'large2', tablet: 'xl' }} />
                                <Typography
                                    fontSize={{ _: 16, tablet: 18 }}
                                    variant="accent"
                                    color="commons.white"
                                    ml="1rem"
                                    mr={100}
                        >
                                    manager@advertimo.eu
                                </Typography>
                            </a>
                            <a href="tel:+371 25379582">
                                <Phone size={{ _: 'large2', tablet: 'xl' }} />
                                <Typography
                                    fontSize={{ _: 16, tablet: 18 }}
                                    variant="accent"
                                    color="commons.white"
                                    ml="1rem"
                        >
                                    +371 25379582{' '}
                                </Typography>
                            </a>
                        </Box>
                    </Box>

                    <Box
                        display="flex"
                        width="100%"
                        justifyContent="space-around"
                        flexWrap="wrap"
                        gridGap={200}
                        mb={140}
            >
                        <Box
                            position="relative"
                            height={{ _: undefined, laptop: '100%' }}
                            display="flex"
                            justifyContent="center"
                            overflow="visible"
                >
                            <MapStyled>
                                <MapBG />
                            </MapStyled>
                            <div>
                                <Typography
                                    fontSize={{ _: 32, tablet: 60 }}
                                    variant="h2"
                                    color="commons.white"
                        >
                                    RIGA, LATVIA
                                </Typography>
                                <Typography
                                    fontSize={{ _: 16, tablet: 18 }}
                                    variant="accent"
                                    color="light.grey"
                        >
                                    Pulkveža Brieža st. 21 | Center, LV-1045
                                </Typography>
                            </div>
                        </Box>
                        <Box
                            height="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems={{ _: 'center', tabletL: 'flex-start' }}
                            flexDirection="column"
                            maxWidth={750}
                >
                            <Typography
                                fontSize={{ _: 32, tablet: 60 }}
                                variant="h2"
                                color="commons.white"
                                mb={26}
                    >
                                {t('contacts.form')}
                            </Typography>
                            <Form />
                        </Box>
                    </Box>
                </Container>
                <Footer />
            </StyledSection>
        </Layout>
    );
}

export default ContactsPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["contacts", "header"]}, language: {eq: $language}}) {
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