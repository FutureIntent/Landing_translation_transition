import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const CustomSection = styled.section`
    background-color: ${({ theme }) => theme.colors.commons.white};
    display: flex;
    flex-direction: column;
    position: relative;

    ${mediaQueries.laptopS} {
        flex-direction: row;
    }
`;

const Intro = ({ data }: any): ReactElement => {
    const { isLaptopS, isXxl } = useBreakpoint();
    // eslint-disable-next-line no-console

    return (
        <CustomSection>
            <Container>
                <GridParent noGutter>
                    <GridChild gridColumn={{ _: '1/ span 12', tablet: '1/ span 6' }}>
                        <Box
                            height={{ _: 'calc(100% + 80px)', tablet: 'calc(100% + 100px)' }}
                            mt={-50}
                            mb={{ _: -30, tablet: -50 }}
                        >
                            <GatsbyImage
                                style={{
                                    marginLeft: isXxl
                                        ? 'calc(((100vw - 1920px) + var(--container-padding-x)) * -1)'
                                        : 'calc(var(--container-padding-x) * -1)',
                                    height: '100%',
                                    width: isXxl
                                        ? `calc(100% + ((100vw - 1920px) + var(--container-padding-x)))`
                                        : `calc(100% + var(--container-padding-x))`,
                                }}
                                alt={data.primary.background_image.alt}
                                image={data.primary.background_image.gatsbyImageData}
                            />
                        </Box>
                        <GatsbyImage
                            style={{
                                maxWidth: 850,
                                position: 'absolute',
                                width: isLaptopS ? '100%' : undefined,
                                height: isLaptopS ? undefined : '100%',

                                right: isLaptopS ? 0 : undefined,
                                top: isLaptopS ? '50%' : 0,
                                transform: isLaptopS ? 'translateY( -50%)' : undefined,
                            }}
                            imgStyle={{ margin: 'auto 0', height: 'unset' }}
                            alt={data.primary.preview_on_devices.alt}
                            image={data.primary.preview_on_devices.gatsbyImageData}
                        />
                    </GridChild>
                    <GridChild gridColumn={{ _: '1/ span 12', tablet: '7/ span 6' }}>
                        <Box
                            mt={{ _: 30, tablet: 60, laptopS: 120 }}
                            mb={180}
                            p={{ _: '30px 15px', tablet: '60px 90px', laptop: '60px 200px' }}
                            gridGap={65}
                            display="flex"
                            flexDirection="column"
                        >
                            <GatsbyImage
                                imgStyle={{ height: '100%', width: 'unset', maxHeight: 129 }}
                                alt={data.primary.logo.alt}
                                image={data.primary.logo.gatsbyImageData}
                            />
                            <Typography
                                variant="paragraph"
                                color="light.grey"
                                style={{ maxHeight: 590 }}
                            >
                                {data.primary.description.text}
                            </Typography>
                        </Box>
                    </GridChild>
                </GridParent>
            </Container>
        </CustomSection>
    );

    return (
        <CustomSection>
            <Box
                flex={1}
                width={{ _: '100%', laptopS: '50%' }}
                display="flex"
                justifyContent="center"
                position="relative"
                alignItems={{ _: 'center', tabletL: 'unset' }}
                mt={-50}
                mb={{ _: -30, tablet: -50 }}
            >
                <Box width={{ _: '95%', tablet: '100%' }} ml={{ _: '-5%', tablet: 0 }}>
                    <GatsbyImage
                        style={{ width: '100%' }}
                        alt={data.primary.background_image.alt}
                        image={data.primary.background_image.gatsbyImageData}
                    />
                </Box>
                <GatsbyImage
                    style={{
                        maxWidth: 850,
                        position: 'absolute',
                        width: isLaptopS ? '100%' : undefined,
                        height: isLaptopS ? undefined : '100%',

                        right: isLaptopS ? 0 : undefined,
                        top: isLaptopS ? '50%' : undefined,
                        transform: isLaptopS ? 'translateY( -50%)' : undefined,
                    }}
                    imgStyle={{ margin: 'auto 0', height: 'unset' }}
                    alt={data.primary.preview_on_devices.alt}
                    image={data.primary.preview_on_devices.gatsbyImageData}
                />
            </Box>

            <Box width={{ _: '100%', laptopS: '50%' }}>
                <Box
                    mt={{ _: 30, tablet: 60, laptopS: 120 }}
                    mb={180}
                    p={{ _: '30px 15px', tablet: '60px 90px', laptop: '60px 200px' }}
                    gridGap={65}
                    display="flex"
                    flexDirection="column"
                >
                    <GatsbyImage
                        imgStyle={{ height: '100%', width: 'unset', maxHeight: 129 }}
                        alt={data.primary.logo.alt}
                        image={data.primary.logo.gatsbyImageData}
                    />
                    <Typography variant="paragraph" color="light.grey" style={{ maxHeight: 590 }}>
                        {data.primary.description.text}
                    </Typography>
                </Box>
            </Box>
        </CustomSection>
    );
};

export default Intro;
