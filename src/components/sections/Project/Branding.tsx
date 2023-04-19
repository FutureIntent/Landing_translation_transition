import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement, useEffect, useState } from 'react';
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

const List = styled.ul`
    cursor: default;
    list-style: none;

    li {
        margin-bottom: 10px;

        &:not(.active):hover {
            cursor: pointer;
        }

        &.active {
            display: flex;
            padding-left: 15px;
            position: relative;

            &:before {
                color: ${({ theme }) => theme.colors.light.accent};
                content: '–';
                left: 0;
                position: absolute;
                top: 0;
            }
        }
    }
`;

const CustomSection = styled.section`
    position: relative;
`;

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

const SliderWrapper = styled(Box)`
    //aspect-ratio: 280/420;
    margin-left: auto;
    margin-right: auto;
    max-width: 1520px;

    // ${mediaQueries.tablet} {
    //     aspect-ratio: 280 / 520;
    // }

    ${mediaQueries.laptopS} {
        aspect-ratio: 1520 / 800;
    }
`;

const Branding = ({ slider, title }: any): ReactElement => {
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const { prevSlide, nextSlide, sliderRef, sliderPaginationRef } = useSwiper();
    const [images, setImages] = useState<any>([]);

    useEffect(() => {
        if (slider.items) {
            setImages(
                slider.items.map(({ slide }: any) => ({
                    src: slide.url,
                    loading: 'lazy',
                    alt: slide.alt,
                    gatsbyImageData: slide.gatsbyImageData,
                })),
            );

            const allCategories: string[] =
                Array.from(new Set(slider.items.map(({ category }: any) => category.text))) || [];

            if (allCategories.length) {
                setCategories(allCategories);
                setActiveCategory(allCategories[0]);
            }
        }
    }, []);

    useEffect(() => {
        const categoryImages: any = [];

        slider.items.forEach(({ slide, category }: any) => {
            if (category.text === activeCategory) {
                categoryImages.push({
                    src: slide.url,
                    loading: 'lazy',
                    alt: slide.alt,
                    gatsbyImageData: slide.gatsbyImageData,
                });
            }
        });

        setImages(categoryImages);
        sliderRef.current?.swiper.slideTo(0);
    }, [activeCategory]);

    return (
        <CustomSection>
            <GatsbyImage
                alt={slider.primary.background_cover.alt}
                image={slider.primary.background_cover.gatsbyImageData}
                style={{ height: 720, width: '100%' }}
            />
            <Container>
                <SliderWrapper
                    mt="-400px"
                    display="flex"
                    boxShadow="0px 8px 30px rgba(43, 48, 57, 0.15)"
                    flexDirection={{ _: 'column', laptopS: 'row' }}
                >
                    <Box
                        maxWidth={{ _: '100%', laptopS: 435 }}
                        backgroundColor={colors.light.black}
                        p={{ _: '20px 20px 30px', laptopS: 40 }}
                        width="100%"
                    >
                        <Typography variant="h4" color="light.grey">
                            {title}
                        </Typography>
                        <Typography
                            variant="h3"
                            color="light.greyDark"
                            transformText="uppercase"
                            mb={30}
                        >
                            Branding
                        </Typography>

                        <List>
                            {categories.map((category: any) => (
                                <li
                                    key={category}
                                    className={category === activeCategory ? 'active' : undefined}
                                >
                                    <Box onClick={() => setActiveCategory(category)}>
                                        <Typography variant="h4" color="light.grey">
                                            {category}
                                        </Typography>
                                    </Box>
                                </li>
                            ))}
                        </List>
                    </Box>

                    <Box
                        backgroundColor={colors.commons.white}
                        overflow="hidden"
                        position="relative"
                        height="100%"
                    >
                        <Slider
                            paginationRef={sliderPaginationRef}
                            sliderRef={sliderRef}
                            slidesPerView={1}
                            showOverflow={false}
                            lightboxSrcImages={images}
                        >
                            {images.map((slide: any) => (
                                <Box
                                    key={slide.alt}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    height="100%"
                                    minHeight={360}
                                    maxHeight={{ _: 360, laptopS: 800 }}
                                >
                                    <GatsbyImage
                                        alt={slide.alt}
                                        style={{ width: '100%', height: '100%' }}
                                        image={slide.gatsbyImageData}
                                    />
                                </Box>
                            ))}
                        </Slider>

                        <Box
                            position="absolute"
                            zIndex={30}
                            width="100%"
                            bottom={0}
                            p={{ _: '40px 15px', tablet: 60 }}
                        >
                            <Box display="flex" justifyContent="space-between">
                                <SliderPagination ref={sliderPaginationRef} />
                                <Box display="flex" alignItems="center">
                                    <ArrowHolder
                                        onClick={prevSlide}
                                        mr={{ _: '10px', tablet: '30px' }}
                                    >
                                        <ArrowLeft color={colors.light.grey} />
                                    </ArrowHolder>
                                    <ArrowHolder onClick={nextSlide}>
                                        <ArrowRight color={colors.light.grey} />
                                    </ArrowHolder>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </SliderWrapper>
            </Container>
        </CustomSection>
    );
};

export default Branding;
