import { useStaticQuery, Link, graphql } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useRef } from 'react';
import styled from 'styled-components';
import { Swiper } from 'swiper/types';

import { useSwiper } from '@hooks';

import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Tag from '@components/atoms/Tag/Tag';
import Typography from '@components/atoms/Typography';

import ActionArrow from '@components/molecules/Icons/ActionArrow';
import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import Slider, { SliderPagination } from '@components/molecules/Slider';

const TagWrapper = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 23px;
`;

const ArrowHolder = styled(Box)<{ disabled?: boolean }>`
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.light.grey};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;

    ${({ disabled }) =>
        disabled &&
        `
            cursor: not-allowed;
            opacity: 0.5;
    `}

    ${mediaQueries.tablet} {
        height: 50px;
        width: 50px;
    }
`;

const Card = styled(Box)`
    background-color: ${({ theme }) => theme.colors.light.f6f6};
    padding: 25px var(--container-nav-space) 50px var(--container-padding-x);

    ${mediaQueries.mobileL} {
        padding: 30px 40px 70px;
    }
`;

const CustomGridParent = styled(GridParent)`
    align-items: center;

    ${mediaQueries.laptopS} {
        min-height: 100vh;
        padding-bottom: unset;
    }
`;

const CustomContainer = styled(Container)`
    padding: 0;
`;

const query = graphql`
    {
        allPrismicProjectCard {
            edges {
                node {
                    uid
                    data {
                        body {
                            ... on PrismicProjectCardDataBodyIntro {
                                id
                                slice_label
                                slice_type
                                primary {
                                    background_image {
                                        alt
                                        gatsbyImageData
                                        url
                                    }
                                    description {
                                        text
                                    }
                                    logo {
                                        alt
                                        gatsbyImageData
                                        url
                                    }
                                    preview_on_devices {
                                        alt
                                        gatsbyImageData
                                        url
                                    }
                                }
                            }
                        }
                        categories {
                            category {
                                uid
                                slug
                            }
                        }
                        poster {
                            alt
                            gatsbyImageData
                            url
                        }
                        title {
                            text
                        }
                    }
                }
            }
        }
    }
`;

const Slide = ({ slide }: any) => (
    <>
        <Typography variant="h3" color="light.greyDark" transformText="uppercase" mb="1rem">
            {slide.title.text}
        </Typography>
        <TagWrapper>
            {slide.categories.map(({ category }: any) => (
                <Tag key={category.slug}>
                    <Typography variant="caption" color="light.greyDark" transformText="uppercase">
                        {category.slug}
                    </Typography>
                </Tag>
            ))}
        </TagWrapper>
        <Typography variant="paragraph" color="light.black" mb="1rem">
            {slide.intro.primary.description.text}
        </Typography>
    </>
);

const OurWorks = () => {
    const bgRef = useRef<HTMLElement & { swiper: Swiper }>(null);
    const devicesRef = useRef<HTMLElement & { swiper: Swiper }>(null);
    const { isXxl, isLaptopS, isMobileL } = useBreakpoint();
    const { nextSlide, prevSlide, sliderRef, sliderPaginationRef } = useSwiper();
    const { allPrismicProjectCard } = useStaticQuery(query);

    const slides = allPrismicProjectCard.edges.map(({ node }: any) => {
        const { categories, poster, title } = node.data;
        const intro = node.data.body.find((block: any) => block.slice_type === 'intro');

        return {
            uid: node.uid,
            intro,
            categories,
            poster,
            title,
        };
    });

    return (
        <section id="our-works">
            <CustomContainer isHomePage>
                <CustomGridParent noGutter gridGap={{ _: undefined, tablet: 30 }}>
                    <GridChild
                        gridColumn={{ _: '1/ span 12', laptopS: '1 / span 9' }}
                        gridRow={{ _: '1/ span 2', laptopS: '1/1' }}
                        style={{
                            alignSelf: 'flex-start',
                            height: isLaptopS ? '100%' : undefined,
                            display: isLaptopS ? 'flex' : undefined,
                            alignItems: isLaptopS ? 'center' : undefined,
                        }}
                    >
                        <Box
                            height={{ _: '100%', laptopS: 'unset' }}
                            position="relative"
                            zIndex={0}
                            style={{
                                marginLeft: isXxl
                                    ? 'calc(((100vw - 1920px) + var(--container-padding-x)) * -1)'
                                    : 'calc(var(--container-padding-x) * -1)',
                                aspectRatio: isLaptopS ? '1730 / 1440' : undefined,
                                width: isXxl
                                    ? `calc(100% + ((100vw - 1920px) + var(--container-padding-x)))`
                                    : `calc(100% + var(--container-padding-x))`,
                            }}
                        >
                            <Slider
                                sliderRef={bgRef}
                                slidesPerView={1}
                                allowTouchMove={false}
                                grabCursor={false}
                            >
                                {slides.map((slide: any) => (
                                    <GatsbyImage
                                        style={{ width: '100%', height: '100%' }}
                                        key={slide.intro.id}
                                        loading="eager"
                                        alt={slide.intro.primary.background_image.alt}
                                        image={slide.intro.primary.background_image.gatsbyImageData}
                                    />
                                ))}
                            </Slider>
                        </Box>
                    </GridChild>

                    <GridChild
                        gridColumn={{ _: '1/ span 12', laptopS: '2 / span 6' }}
                        gridRow="1/1"
                        style={{ padding: isLaptopS ? undefined : '5% 10% 0' }}
                    >
                        <Slider sliderRef={devicesRef} allowTouchMove={false} grabCursor={false}>
                            {slides.map((slide: any) => (
                                <Box
                                    key={slide.intro.id}
                                    margin="0 auto"
                                    pb={{ _: 30, tablet: 'unset' }}
                                    display="flex"
                                    alignItems="center"
                                    pr={{ _: 'var(--container-nav-space)', tablet: 0 }}
                                    pl={{ _: 'var(--container-padding-x)', tablet: 0 }}
                                >
                                    <GatsbyImage
                                        loading="eager"
                                        alt={slide.intro.primary.preview_on_devices.alt}
                                        image={
                                            slide.intro.primary.preview_on_devices.gatsbyImageData
                                        }
                                    />
                                </Box>
                            ))}
                        </Slider>
                    </GridChild>

                    <GridChild
                        gridColumn={{ _: '1/ span 12', laptopS: '8/ span 4' }}
                        gridRow={{ _: '2/2', laptopS: '1/1' }}
                        style={{ padding: isMobileL && !isLaptopS ? '0 15%' : undefined }}
                    >
                        <Box>
                            {isLaptopS && (
                                <Link to="/works">
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="flex-end"
                                        gridGap={15}
                                        mb={30}
                                    >
                                        <Typography
                                            variant="accent"
                                            as="span"
                                            color="light.grey"
                                            transformText="uppercase"
                                        >
                                            View all works
                                        </Typography>
                                        <ActionArrow size="large" color={colors.light.grey} />
                                    </Box>
                                </Link>
                            )}
                            <Card
                                mx={{
                                    mobileL: 'auto',
                                }}
                            >
                                <Box display="flex" justifyContent="space-between">
                                    <SliderPagination ref={sliderPaginationRef} />
                                    <Box display="flex" alignItems="center">
                                        <ArrowHolder
                                            onClick={prevSlide}
                                            disabled={sliderRef?.current?.swiper.isBeginning}
                                            mr={{ _: '10px', tablet: '25px' }}
                                        >
                                            <ArrowLeft color={colors.light.grey} />
                                        </ArrowHolder>
                                        <ArrowHolder
                                            onClick={nextSlide}
                                            disabled={sliderRef?.current?.swiper.isEnd}
                                        >
                                            <ArrowRight color={colors.light.grey} />
                                        </ArrowHolder>
                                    </Box>
                                </Box>
                                <Typography
                                    variant="h4"
                                    color="light.grey"
                                    transformText="uppercase"
                                    mt={20}
                                >
                                    Recent work
                                </Typography>
                                {bgRef.current && devicesRef.current && (
                                    <Slider
                                        paginationRef={sliderPaginationRef}
                                        sliderRef={sliderRef}
                                        controller={{
                                            control: [
                                                bgRef.current.swiper,
                                                devicesRef.current.swiper,
                                            ],
                                        }}
                                    >
                                        {slides.map((slide: any) => (
                                            <Box
                                                key={slide.intro.id}
                                                display="flex"
                                                flexDirection="column"
                                                justifyContent="space-between"
                                            >
                                                <Slide slide={slide} />

                                                <Link to={`/works/${slide.uid}`}>
                                                    <Typography
                                                        variant="accent"
                                                        as="p"
                                                        color="light.accent"
                                                        mt={30}
                                                        transformText="uppercase"
                                                    >
                                                        Browse project
                                                    </Typography>
                                                </Link>
                                            </Box>
                                        ))}
                                    </Slider>
                                )}
                            </Card>
                        </Box>
                    </GridChild>
                </CustomGridParent>
            </CustomContainer>
        </section>
    );
};

export default OurWorks;
