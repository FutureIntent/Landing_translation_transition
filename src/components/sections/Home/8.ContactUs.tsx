import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Form from '@components/atoms/Form/Form';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import { Map } from '@components/molecules/Icons/Map';

const MapStyled = styled.div`
    svg {
        height: 1808px;
        left: -170%;
        position: absolute;
        top: -780px;
        width: 790%;

        ${mediaQueries.mobileL} {
            left: -487px;
            //top: -650px;
            width: 790%;
        }

        ${mediaQueries.laptop} {
            left: -120%;
            top: -720px;
            width: 600%;
        }
    }
`;
const StyledSection = styled(Section)`
    justify-content: center;
    margin-bottom: var(--footer-height);
    padding: 200px 0 100px;

    ${mediaQueries.tablet} {
        padding: 220px 0;
    }
`;

const CustomContainer = styled(Container)`
    grid-column-gap: 100px;
`;

const ContactUs = () => (
    <StyledSection className="panel" id="contact-us">
        <CustomContainer
            isHomePage
            display="flex"
            alignItems={{ _: 'center', tabletL: 'flex-start' }}
            flexDirection={{ _: 'column', tabletL: 'row' }}
        >
            <Box
                display="flex"
                width="100%"
                justifyContent="space-around"
                flexWrap="wrap"
                gridGap={200}
                pb={120}
            >
                <Box
                    position="relative"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <MapStyled>
                        <Map />
                    </MapStyled>
                    <div>
                        <Typography variant="h2" color="commons.white">
                            RIGA, LATVIA
                        </Typography>
                        <Typography variant="accent" color="light.grey">
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
                    zIndex={10}
                >
                    <Typography variant="h2" color="commons.white" mb={26}>
                        LET’S TALK
                    </Typography>
                    <Form />
                </Box>
            </Box>
        </CustomContainer>
    </StyledSection>
);

export default ContactUs;
