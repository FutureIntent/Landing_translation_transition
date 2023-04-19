import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Hr from '@components/atoms/Hr';
import Typography from '@components/atoms/Typography';
import { FONT_BOLD } from '@components/atoms/Typography/Typography';

import ActionButton from '@components/molecules/ActionButton';
import IconWithText from '@components/molecules/IconWithText/IconWithText';
import Flashlight from '@components/molecules/Icons/Flashlight';
import Rocket from '@components/molecules/Icons/Rocket';
import Soldiers from '@components/molecules/Icons/Soldiers';

const ColorImageWrapper = styled.div`
    //position: absolute;
    margin-right: calc(var(--container-nav-space) * -1);
    padding: 30px 0;
    right: 0;
    top: 30px;
    z-index: 10;

    ${mediaQueries.tabletL} {
        margin-right: unset;
    }
`;

const TextContent = () => {
    const { isTabletL } = useBreakpoint();

    return (
        <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            height="100%"
            maxWidth={{ _: undefined, tabletL: 580 }}
        >
            <Box position="relative" width="100%">
                <Box
                    position={{ _: 'absolute', tabletL: 'relative' }}
                    left={{ _: 0, tabletL: 'unset' }}
                    top={{ _: '40%', tabletL: 'unset' }}
                    zIndex={{ _: 10, tabletL: 0 }}
                >
                    <Typography variant="h4" color="light.greyLight" mb={5}>
                        EST. 2018
                    </Typography>
                    <Typography
                        variant={{ _: 'h3', tabletL: 'h2' }}
                        color="commons.white"
                        mb={18}
                        transformText="uppercase"
                    >
                        Advertimo
                    </Typography>
                </Box>
                {!isTabletL && (
                    <ColorImageWrapper>
                        <StaticImage
                            quality={90}
                            src="../../../assets/images/glitch_bg-color.png"
                            alt="Company office building color"
                        />
                    </ColorImageWrapper>
                )}
            </Box>
            <Typography as="p" variant="accent" fontWeight={FONT_BOLD} color="light.grey" mb="1rem">
                We are the company that works in IT-industry.
            </Typography>
            <Typography variant="paragraph" color="light.grey" mb={80}>
                We create our own high-quality solutions and also share our expertise for our
                third-party clients and partners. But first of all, Advetimo is the team of inspired
                and talented visionaries, strategists, developers and user experience designers.
            </Typography>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <ActionButton as={Link} label="Browse works" withArrow to="/works" />
            <Hr mt={54} mb={42} />
            <IconWithText icon={<Soldiers size="xxxl" />} text="6 Specialists + outsource" />
            <IconWithText py={20} icon={<Rocket size="xxxl" />} text="10 projects launched" />
            <IconWithText icon={<Flashlight size="xxxl" />} text="∞ Ideas & Solutions" />
        </Box>
    );
};

export default TextContent;
