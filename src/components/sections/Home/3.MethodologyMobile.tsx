import * as React from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Typography from '@components/atoms/Typography';

import Code from '@components/organisms/Methodology/Code';
import Design from '@components/organisms/Methodology/Design';
import Strategy from '@components/organisms/Methodology/Strategy';

const HorizontalSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 130px;
    overflow: auto;
    padding-bottom: 160px;
    padding-top: 80px;
`;

const MethodologyMobile = () => (
    <Container as="section" isHomePage>
        <Box pt="100px" right={45}>
            <Typography variant="h2" color="light.grey" transformText="uppercase" opacity="15%">
                Methodology
            </Typography>
        </Box>
        <HorizontalSection as="div">
            <Box
                data-scroll-card="card"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box maxWidth={{ _: '100%', laptopS: 900, desktop: '50%' }}>
                    <Strategy />
                </Box>
            </Box>
            <Box
                data-scroll-card="card"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box maxWidth={{ _: '100%', laptopS: 900, desktop: '50%' }}>
                    <Design />
                </Box>
            </Box>
            <Box
                data-scroll-card="card"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box maxWidth={{ _: '100%', laptopS: 900, desktop: '50%' }}>
                    <Code />
                </Box>
            </Box>
        </HorizontalSection>
    </Container>
);

export default MethodologyMobile;
