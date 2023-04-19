import { StaticImage } from 'gatsby-plugin-image';
import { useRef } from 'react';
import styled from 'styled-components';

import { useModal, useSwiper } from '@hooks';

import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Form from '@components/atoms/Form/Form';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Section from '@components/atoms/Section';
import Tag from '@components/atoms/Tag/Tag';
import Typography from '@components/atoms/Typography';

import ActionButton from '@components/molecules/ActionButton';
import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import Cross from '@components/molecules/Icons/Cross';
import Modal from '@components/molecules/Modal';
import Slider, { SliderPagination } from '@components/molecules/Slider';
import { useTranslation } from 'gatsby-plugin-react-i18next';

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

const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.light.greyDark};
    border-top: 1px solid ${({ theme }) => theme.colors.light.greyDark};
    width: 100%;
`;

const ContentWrapper = styled.div`
    border-left: 1px solid ${({ theme }) => theme.colors.light.greyDark};
    border-right: 1px solid ${({ theme }) => theme.colors.light.greyDark};
    position: relative;
`;

const CustomContainer = styled(Container)`
    ${mediaQueries.laptopS} {
        padding: 0;
    }
`;

const CustomTag = styled(Tag)`
    background-color: rgba(44, 48, 57, 0.45);
`;

const CustomSection = styled(Section)`
    justify-content: center;
    padding-bottom: 240px;
    padding-top: 200px;
`;

const Slide = ({ slide }: any) => (
    <>
        <Typography variant="h3" color="commons.white" transformText="uppercase" mb="20px">
            {slide.heading}
        </Typography>
        <TagWrapper>
            {slide.tags.map((tag: string) => (
                <CustomTag key={tag}>
                    <Typography variant="caption" color="light.grey" transformText="uppercase">
                        {tag}
                    </Typography>
                </CustomTag>
            ))}
        </TagWrapper>
        {slide.paragraph}
    </>
);

const Services = () => {
    const { openModal, closeModal } = useModal('requestService');
    const posterSliderRef = useRef(null);
    const { nextSlide, prevSlide, sliderRef, sliderPaginationRef } = useSwiper();
    const {t} = useTranslation();

    const slides = [
        {
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/services/slide1.png"
                    alt="bg"
                />
            ),
            heading: t('services.website&apps.heading'),
            tags: ['Websites', 'Landing pages', 'Web apps', 'Mobile apps', 'Desktop apps'],
            paragraph: (
                <Typography variant="paragraph" color="light.greyLight">
                    {t('services.website&apps.paragraph1')}
                    <br />
                    <br />
                    {t('services.website&apps.paragraph2')}
                </Typography>
            ),
        },
        {
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/services/slide2.png"
                    alt="bg"
                />
            ),
            heading: t('services.branding.heading'),
            tags: ['Logo', 'Brand identity', 'Print production', 'Digital assets', 'Social media'],
            paragraph: (
                <Typography variant="paragraph" color="light.greyLight">
                    {t('services.branding.paragraph1')}
                    <br />
                    <br />
                    {t('services.branding.paragraph2')}
                </Typography>
            ),
        },
        {
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/services/slide3.png"
                    alt="bg"
                />
            ),
            heading: t('services.marketing&ads.heading'),
            tags: ['Ad materials', 'Ad campaigns', 'SMM', 'SEO', 'Blogposts'],
            paragraph: (
                <Typography variant="paragraph" color="light.greyLight">
                    {t('services.marketing&ads.paragraph1')}
                    <br />
                    <br />
                    {t('services.marketing&ads.paragraph2')}
                </Typography>
            ),
        },
        {
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/services/slide4.png"
                    alt="bg"
                />
            ),
            heading: t('services.code.heading'),
            tags: ['Architecture', 'Backend', 'Frontend', 'QA', 'Testing'],
            paragraph: (
                <Typography variant="paragraph" color="light.greyLight">
                    {t('services.code.paragraph1')}
                    <br />
                    <br />
                    {t('services.code.paragraph2')}
                </Typography>
            ),
        },
    ];

    return (
        <CustomSection id="services">
            <Wrapper>
                <CustomContainer isHomePage>
                    <GridParent noGutter>
                        <GridChild gridColumn={{ _: '1/ span 12', laptopS: '2/ span 10' }}>
                            <ContentWrapper>
                                <Box p={{ _: '15px 10px', tablet: '20px 40px' }}>
                                    <Typography
                                        variant="h2"
                                        color="light.greyLight"
                                        transformText="uppercase"
                                    >
                                        {t('services.heading')}
                                    </Typography>
                                </Box>
                            </ContentWrapper>
                        </GridChild>
                    </GridParent>
                </CustomContainer>
            </Wrapper>

            <CustomContainer isHomePage>
                <GridParent noGutter>
                    <GridChild
                        gridColumn={{ _: '1/ span 12', laptopS: '2 / span 6' }}
                        gridRow="1/1"
                    >
                        <ContentWrapper>
                            <Box position="absolute" top={-15} left={-15} zIndex={5}>
                                <Cross size="medium4" />
                            </Box>
                            <Box
                                position="absolute"
                                bottom={{ _: 'unset', laptopS: -15 }}
                                top={{ _: -15, laptopS: 'unset' }}
                                left={{ _: 'unset', laptopS: -15 }}
                                right={{ _: -15, laptopS: 'unset' }}
                                zIndex={5}
                                height={30}
                                width={30}
                            >
                                <Cross size="medium4" />
                            </Box>
                            <Slider
                                sliderRef={posterSliderRef}
                                slidesPerView={1}
                                allowTouchMove={false}
                                grabCursor={false}
                            >
                                {slides.map((slide) => (
                                    <Box
                                        key={slide.heading}
                                        backgroundColor={colors.light.black}
                                        margin="0 auto"
                                        display="flex"
                                        height="100%"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        {slide.poster}
                                    </Box>
                                ))}
                            </Slider>
                        </ContentWrapper>
                    </GridChild>

                    <GridChild
                        gridColumn={{ _: '1/ span 12', laptopS: '8/ span 4' }}
                        gridRow={{ _: '2/2', laptopS: '1/1' }}
                    >
                        <Box
                            p={{
                                _: '20px 15px 30px',
                                tablet: '30px 40px ',
                            }}
                            height="100%"
                            borderRight={`1px solid ${colors.light.greyDark}`}
                            borderLeft={{
                                _: `1px solid ${colors.light.greyDark}`,
                                laptopS: 'unset',
                            }}
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                bottom={{ _: -15, laptopS: 'unset' }}
                                top={{ _: 'unset', laptopS: -15 }}
                                right={-15}
                                zIndex={5}
                                height={30}
                                width={30}
                            >
                                <Cross size="medium4" />
                            </Box>
                            <Box
                                position="absolute"
                                bottom={-15}
                                right={{ _: 'unset', laptopS: -15 }}
                                left={{ _: -15, laptopS: 'unset' }}
                                zIndex={5}
                                height={30}
                                width={30}
                            >
                                <Cross size="medium4" />
                            </Box>
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
                            {posterSliderRef.current && (
                                <Slider
                                    paginationRef={sliderPaginationRef}
                                    sliderRef={sliderRef}
                                    controller={{
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        control: [posterSliderRef.current.swiper],
                                    }}
                                >
                                    {slides.map((slide: any) => (
                                        <Box
                                            key={slide.header}
                                            mt={20}
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="space-between"
                                        >
                                            <Slide slide={slide} />
                                        </Box>
                                    ))}
                                </Slider>
                            )}
                        </Box>
                    </GridChild>
                </GridParent>
            </CustomContainer>

            <Wrapper>
                <CustomContainer isHomePage>
                    <GridParent noGutter>
                        <GridChild gridColumn={{ _: '1/ span 12', laptopS: '2/ span 10' }}>
                            <ContentWrapper>
                                <Box
                                    p={{
                                        _: '20px 15px',
                                        tablet: '20px 40px',
                                    }}
                                    display="flex"
                                    justifyContent={{ _: 'center', tablet: 'space-between' }}
                                    alignItems="center"
                                    flexDirection={{ _: 'column', tablet: 'row' }}
                                >
                                    <Box
                                        height={{ _: 50, tablet: 60 }}
                                        display="flex"
                                        flex={{ _: 'unset', tablet: 1 }}
                                        alignItems={{ _: 'center', tablet: undefined }}
                                    >
                                        <Typography
                                            variant="accent"
                                            color="commons.white"
                                            transformText="uppercase"
                                            mb={{ _: 15, tablet: 0 }}
                                        >
                                            {t('services.question')}
                                        </Typography>
                                    </Box>

                                    <ActionButton
                                        label={t('services.label')}
                                        withArrow
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        onClick={openModal}
                                    />
                                </Box>
                            </ContentWrapper>
                        </GridChild>
                    </GridParent>
                </CustomContainer>
            </Wrapper>
            <Modal name="requestService" onClose={closeModal} title="Request service">
                <Form fullWidthBtn />
            </Modal>
        </CustomSection>
    );
};

export default Services;
