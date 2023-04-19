import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement, useEffect, useState } from 'react';
import { ImagesListType } from 'react-spring-lightbox';
import styled from 'styled-components';

import { useSwiper } from '@hooks';

import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Typography from '@components/atoms/Typography';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import Slider, { SliderPagination } from '@components/molecules/Slider';

const ArrowHolder = styled(Box)`
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.light.grey};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 50px;

    ${mediaQueries.tablet} {
        height: 40px;
        width: 40px;
    }
`;

const UiKit = ({ data }: any): ReactElement => {
    const { nextSlide, prevSlide, sliderRef, sliderPaginationRef } = useSwiper();
    const [images, setImages] = useState<ImagesListType>([]);

    useEffect(() => {
        if (data.items) {
            setImages(
                data.items.map(({ slide }: any) => ({
                    src: slide.url,
                    loading: 'lazy',
                    alt: slide.alt,
                })),
            );
        }
    }, []);

    return (
        <section>
            <Container>
                <Box
                    mt={{ _: 120, tablet: 180 }}
                    mb={{ _: 120, tablet: 200 }}
                    display="flex"
                    alignItems="center"
                    gridGap={{ _: 65, tablet: 30 }}
                    flexDirection={{ _: 'column', tablet: 'row' }}
                >
                    <Box
                        flex={1}
                        width={{ _: '100%', tablet: '50%' }}
                        display="flex"
                        flexDirection="column"
                        order={{ _: 2, tablet: 1 }}
                    >
                        <Box
                            backgroundColor={colors.commons.white}
                            boxShadow="0px 8px 30px rgba(43, 48, 57, 0.15)"
                            width="100%"
                            mb={20}
                            style={{ aspectRatio: 900 / 560 }}
                        >
                            <Slider
                                paginationRef={sliderPaginationRef}
                                sliderRef={sliderRef}
                                lightboxSrcImages={images}
                            >
                                {data.items.map(({ slide }: any) => (
                                    <GatsbyImage
                                        key={slide.alt}
                                        alt={slide.alt}
                                        image={slide.gatsbyImageData}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                ))}
                            </Slider>
                        </Box>

                        <Box display="flex" justifyContent="space-between">
                            <SliderPagination ref={sliderPaginationRef} />
                            <Box display="flex" alignItems="center">
                                <ArrowHolder onClick={prevSlide} mr={{ _: '10px', tablet: '30px' }}>
                                    <ArrowLeft color={colors.light.grey} />
                                </ArrowHolder>
                                <ArrowHolder onClick={nextSlide}>
                                    <ArrowRight color={colors.light.grey} />
                                </ArrowHolder>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        flex={1}
                        width={{ _: '100%', tablet: '50%' }}
                        maxWidth={590}
                        order={{ _: 1, tablet: 2 }}
                    >
                        <Typography variant="h4" color="light.grey" transformText="uppercase">
                            Ui Kit
                        </Typography>
                        <Typography
                            variant="h2"
                            color="light.black"
                            mb={20}
                            transformText="uppercase"
                        >
                            VISUAL SYSTEM & COMPONENTS
                        </Typography>
                        <Typography variant="paragraph" color="light.greyDark">
                            {data.primary.description.text}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default UiKit;
