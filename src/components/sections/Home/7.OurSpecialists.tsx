import { Canvas } from '@react-three/fiber';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';

import { BackgroundGlitch } from '@components/organisms/OurSpecialists/BackgroundGlitch';
import TextContent from '@components/organisms/OurSpecialists/TextContent';

const BgWrapper = styled.div<{ width: any }>`
    aspect-ratio: 2447 / 1440;
    width: ${({ width }) => width};

    .rotate-180 {
        height: 100%;
        transform: rotateY(180deg);
    }

    canvas,
    #bg-stroke {
        height: 100%;
        position: absolute;
        top: 0;
        transform: rotateY(180deg);
    }

    #bg {
        height: 100%;
        overflow: hidden;
    }
`;

const CustomSection = styled.section`
    margin: 120px 0 140px;
    padding-top: 150px;
    z-index: 100;
`;

const OurSpecialists = () => {
    const { isTabletL } = useBreakpoint();
    const GlitchImage = useMemo(() => BackgroundGlitch, []);
    const isSSR = typeof window === 'undefined';
    const containerSideOffset =
        !isSSR && window?.innerWidth > 1920 ? (window.innerWidth - 1920) / 2 : 0;
    const glitchWidth = `calc(100vw - ${containerSideOffset}px - ${
        !isSSR && window?.innerWidth > 768
            ? 'var(--container-padding-x)'
            : 'var(--container-nav-space)'
    })`;

    return (
        <CustomSection id="specialists" className="panel">
            <Container isHomePage>
                {isTabletL && (
                    <Box
                        display="flex"
                        alignItems="center"
                        height="100%"
                        width="100%"
                        zIndex={40}
                        position="relative"
                        style={{ pointerEvents: 'none' }}
                    >
                        <BgWrapper width={glitchWidth}>
                            <div className="rotate-180">
                                <div
                                    id="bg-stroke"
                                    style={{
                                        width: glitchWidth,
                                    }}
                                >
                                    <StaticImage
                                        quality={90}
                                        style={{ height: '100%', width: '100%' }}
                                        src="../../../assets/images/glitch_bg-color.png"
                                        alt="Company office building color"
                                    />
                                </div>
                                <div id="bg">
                                    <div
                                        style={{
                                            height: '100%',
                                            width: glitchWidth,
                                        }}
                                    >
                                        <Canvas resize={{ scroll: false }}>
                                            {/* eslint-disable-next-line react/no-unknown-property */}
                                            <ambientLight intensity={0.3} />
                                            <GlitchImage />
                                        </Canvas>
                                    </div>
                                </div>
                            </div>
                        </BgWrapper>
                    </Box>
                )}
                <Box
                    position={{ _: undefined, tabletL: 'absolute' }}
                    top={0}
                    height="100%"
                    display="flex"
                    alignItems="center"
                    zIndex={1}
                    left="var(--container-nav-space)"
                >
                    <TextContent />
                </Box>
            </Container>
        </CustomSection>
    );
};

export default OurSpecialists;
