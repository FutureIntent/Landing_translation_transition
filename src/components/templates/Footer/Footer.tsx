import { getClampValue, hexToRGB } from '@utils/helpers';
import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import * as React from 'react';
import styled from 'styled-components';

import colors from '@theme/configs/colors';
import { socialsLinks } from '@theme/const';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import ActionArrow from '@components/molecules/Icons/ActionArrow';
import Envelope from '@components/molecules/Icons/Envelope';
import Facebook from '@components/molecules/Icons/Facebook';
import Instagram from '@components/molecules/Icons/Instagram';
import LinkedIn from '@components/molecules/Icons/LinkedIn';
import LogoWhite from '@components/molecules/Icons/LogoWhite';
import Phone from '@components/molecules/Icons/Phone';

import PageNavigation from '@components/organisms/PageNavigation';
import { animateScroll as scroll } from 'react-scroll';

const ScrollTopWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;

    svg {
        cursor: pointer;
        transform: rotate(-90deg);
    }
`;

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => `rgba(${hexToRGB(theme.colors.light.black)},0.8)`};
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: var(--footer-height);
    justify-content: space-between;
    position: absolute;
    width: 100%;
    z-index: 1;
`;

const SocialLink = styled.a`
    position: relative;

    &:before {
        background: ${({ theme }) => theme.colors.gradient.actionButton};
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: width 0.3s ease-in-out;
        width: 0%;
        z-index: -1;
        will-change: width;
    }

    &:hover {
        &:before {
            width: 100%;
        }

        path {
            fill: ${({ theme }) => theme.colors.commons.white}!important;
        }

        rect {
            stroke: ${({ theme }) => theme.colors.commons.white}!important;
        }
    }
`;

const Footer = ({ id = 'footer' }: { id?: string }) => {
    const { isTablet } = useBreakpoint();

    return (
        <>
            <StyledFooter id={id}>
                <Box py="30px">
                    <Container>
                        <GridParent gridRowGap={30}>
                            <GridChild
                                gridColumn={{ _: '1/ span 6', tablet: '1/ span 4' }}
                                gridRow={1}
                            >
                                <Box>
                                    <LogoWhite
                                        width={getClampValue('120px', '200px')}
                                        height={getClampValue('14px', '23px')}
                                    />
                                </Box>
                            </GridChild>
                            {isTablet && (
                                <GridChild gridColumn="5/ span 4" gridRow="1">
                                    <Box display="flex" justifyContent="center">
                                        <PageNavigation />
                                    </Box>
                                </GridChild>
                            )}
                            <GridChild
                                gridColumn={{ _: '7/ span 6', tablet: '9/ span 4' }}
                                gridRow={1}
                            >
                                <ScrollTopWrapper>
                                    <ActionArrow
                                        size="large3"
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        onClick={
                                            () => scroll.scrollToTop()
                                        }
                                    />
                                </ScrollTopWrapper>
                            </GridChild>

                            <GridChild
                                gridColumn={{ _: '1/ span 12', tablet: '1/ span 6' }}
                                gridRow={2}
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent={{ _: 'center', tablet: 'flex-start' }}
                                    flexWrap="wrap"
                                    gridGap={{ _: 17, tablet: 30 }}
                                >
                                    <a href="mailto:manager@advertimo.eu">
                                        <Envelope size="medium2" />
                                        <Typography
                                            as="span"
                                            variant="paragraph"
                                            color="light.greyLight"
                                            ml="1rem"
                                        >
                                            manager@advertimo.eu
                                        </Typography>
                                    </a>
                                    <a href="tel:+371 25379582">
                                        <Phone size="medium2" />
                                        <Typography
                                            as="span"
                                            variant="paragraph"
                                            color="light.greyLight"
                                            ml="1rem"
                                        >
                                            +371 25379582
                                        </Typography>
                                    </a>
                                </Box>
                            </GridChild>
                            <GridChild
                                gridColumn={{ _: '1/ span 12', tablet: '7/ span 6' }}
                                gridRow={{ _: '3', tablet: '2' }}
                            >
                                <Box
                                    display="flex"
                                    justifyContent={{ _: 'center', tablet: 'flex-end' }}
                                >
                                    <Box
                                        display="flex"
                                        gridGap={10}
                                        maxWidth={{ _: '100%', tabletL: '150px' }}
                                        flexWrap="wrap"
                                    >
                                        <SocialLink href={socialsLinks.facebook} target="_blank">
                                            <Facebook size="large3" />
                                        </SocialLink>

                                        <SocialLink href={socialsLinks.instagram} target="_blank">
                                            <Instagram size="large3" />
                                        </SocialLink>

                                        <SocialLink href={socialsLinks.linkedin} target="_blank">
                                            <LinkedIn size="large3" />
                                        </SocialLink>
                                    </Box>
                                </Box>
                            </GridChild>
                        </GridParent>
                    </Container>
                </Box>
                <Box backgroundColor={colors.light.black} py={15}>
                    <Container>
                        <Box textAlign="center">
                            <Link to="/privacy-policy">
                                <Typography variant="caption" fontSize={16} color="light.accent">
                                    Privacy Policy
                                </Typography>
                            </Link>
                        </Box>
                    </Container>
                </Box>
            </StyledFooter>
        </>
    );
};

export default Footer;
