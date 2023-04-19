import styled from 'styled-components';

import appTheme from '@theme/configs';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ListItem = ({ tag }: { tag: string }) => (
    <Box as="li" mr={20}>
        <Typography variant="h4" color="light.grey" transformText="uppercase">
            #{tag}
        </Typography>
    </Box>
);

const StyledSection = styled(Section)`
    height: 100vh;
    min-height: unset;
    position: sticky;
    top: -100%;
`;

const StyledWrapper = styled.div`
    background: ${({ theme }) => theme.colors.gradient.grey};
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

const Solutions = () => {

    const {t} = useTranslation();

    return(
        <Box position="relative">
            <StyledWrapper data-scroll-item="solution-bg" />
            <StyledSection id="solutions" data-scroll-section="solutions" zIndex={0}>
                <Box width="100%" height="100%">
                    <Box
                        height="100%"
                        width="100%"
                        display="flex"
                        alignItems="center"
                        backgroundColor={appTheme.colors.light.greyBg}
                        className="panel"
                >
                        <Container data-container isHomePage>
                            <Box
                                height="100%"
                                width="100%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                        >
                                <Box maxWidth={{ _: 500, laptopS: 900 }}>
                                    <Box mb={30}>
                                        <Typography variant="h2" color="light.grey">
                                            {`${t('solutions.span1')} `}
                                            <Typography as="span" variant="h2" color="light.accent">
                                                {`${t('solutions.span2')} `}
                                            </Typography>
                                            {`${t('solutions.span3')} `}
                                            <Typography as="span" variant="h2" color="light.accent">
                                                {`${t('solutions.span4')} `}
                                            </Typography>
                                        </Typography>
                                    </Box>

                                    <Box
                                        display="flex"
                                        width="100%"
                                        justifyContent="space-between"
                                        flexDirection={{ _: 'column', tabletL: 'row' }}
                                >
                                        <Box as="ul" display="flex" flexWrap="wrap">
                                            <ListItem tag="strategy" />
                                            <ListItem tag="research" />
                                            <ListItem tag="code" />
                                            <ListItem tag="ux/ui" />
                                            <ListItem tag="social media" />
                                            <ListItem tag="digital media" />
                                            <ListItem tag="apps" />
                                            <ListItem tag="branding" />
                                            <ListItem tag="web" />
                                        </Box>
                                        <Box
                                            borderLeft={{ _: 'none', tabletL: '1px solid' }}
                                            borderLeftColor={appTheme.colors.light.grey}
                                            maxWidth={585}
                                    >
                                            <Typography
                                                variant="paragraph"
                                                color="light.black"
                                                ml={{ _: 0, tabletL: 25 }}
                                                mt={{ _: 32, tabletL: 0 }}
                                        >
                                                {t('solutions.description')}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </StyledSection>
        </Box>
    );
}

export default Solutions;