import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement, useEffect, useState } from 'react';
import { ImagesListType } from 'react-spring-lightbox';
import styled from 'styled-components';
import Swiper from 'swiper';

import { useSwiper } from '@hooks';

import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';

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

const FinalResultSlider = ({ data }: any): ReactElement => {
    const { isTablet } = useBreakpoint();
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
    const { nextSlide, prevSlide, sliderRef, sliderPaginationRef, thumbsSliderRef } = useSwiper();
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
                    mt={{ _: -50, tablet: -100 }}
                    zIndex={100}
                    position="relative"
                    style={{
                        aspectRatio: 290 / 180,
                    }}
                >
                    <Slider
                        lightboxSrcImages={images}
                        paginationRef={sliderPaginationRef}
                        showOverflow={false}
                        sliderRef={sliderRef}
                        thumbs={{ swiper: thumbsSwiper }}
                    >
                        {data.items.map(({ slide }: any) => (
                            <Box
                                key={slide.alt}
                                // maxHeight={850}
                                mx="auto"
                                width="100%"
                                height="100%"
                            >
                                <GatsbyImage
                                    alt={slide.alt}
                                    objectFit="contain"
                                    imgStyle={{ width: '100%', height: '100%' }}
                                    style={{ width: '100%', height: '100%' }}
                                    image={slide.gatsbyImageData}
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>
                <Box mt={30} width="100%" height={{ _: 40, tablet: 130 }}>
                    <Slider
                        slidesPerView="auto"
                        shouldShrink
                        sliderRef={thumbsSliderRef}
                        onSwiper={setThumbsSwiper}
                        breakpoints={{
                            320: {
                                spaceBetween: 15,
                            },
                            768: {
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {data.items.map(({ slide }: any) => (
                            <Box
                                key={slide.alt}
                                style={{
                                    height: '100%',
                                    aspectRatio:
                                        slide.gatsbyImageData.width / slide.gatsbyImageData.height,
                                }}
                            >
                                <GatsbyImage
                                    alt={slide.alt}
                                    image={slide.gatsbyImageData}
                                    style={{
                                        height: '100%',
                                        minHeight: 50,
                                        minWidth: 70,
                                    }}
                                    imgStyle={{
                                        height: '100%',
                                        minHeight: isTablet ? '130px' : '50px',
                                    }}
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>

                <Box display="flex" justifyContent="flex-end" py={40} flexWrap="wrap">
                    {false && <SliderPagination ref={sliderPaginationRef} />}
                    <Box display="flex" alignItems="center">
                        <ArrowHolder onClick={prevSlide} mr={{ _: '10px', tablet: '30px' }}>
                            <ArrowLeft color={colors.light.grey} />
                        </ArrowHolder>
                        <ArrowHolder onClick={nextSlide}>
                            <ArrowRight color={colors.light.grey} />
                        </ArrowHolder>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default FinalResultSlider;
