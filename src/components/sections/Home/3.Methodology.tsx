import { ReactElement } from 'react';
import * as React from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import Code from '@components/organisms/Methodology/Code';
import Design from '@components/organisms/Methodology/Design';
import Strategy from '@components/organisms/Methodology/Strategy';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const HorizontalSection = styled(Section)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
    width: 100%;

    ${mediaQueries.laptopS} {
        width: 300vw;
    }
`;

const CardWrapper = ({ children }: { children: ReactElement }) => (
    <Box
        data-scroll-card="card"
        width={{ _: 'auto', tablet: '100%' }}
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <Box overflow="hidden">{children}</Box>
    </Box>
);

const Methodology = () => {

    const {t} = useTranslation();

    return(
        <section id="methodology">
            <Box
                id="methodology-title"
                position="absolute"
                pt="100px"
                right={
                window.innerWidth > 1920
                    ? 'calc(((100vw - 1920px) / 2) + var(--container-padding-x))'
                    : 'var(--container-padding-x)'
            }
        >
                <Typography
                    display="inline"
                    variant="h1"
                    color="light.grey"
                    transformText="uppercase"
                    opacity="15%"
            >
                    {t('methology.heading1')}
                </Typography>
            </Box>
            <HorizontalSection as="div" id="methodology-cards">
                <Container isHomePage>
                    <CardWrapper>
                        <Strategy />
                    </CardWrapper>
                </Container>
                <Container isHomePage>
                    <CardWrapper>
                        <Design />
                    </CardWrapper>
                </Container>
                <Container isHomePage>
                    <CardWrapper>
                        <Code />
                    </CardWrapper>
                </Container>
            </HorizontalSection>
        </section>
    );
}

export default Methodology;
