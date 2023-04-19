import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

import { useSwiper } from '@hooks';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import Slider from '@components/molecules/Slider';
import SpecialistCard from '@components/molecules/SpecialistCard';

const Specialists = () => {
    const { isTablet } = useBreakpoint();
    const { sliderRef } = useSwiper();

    return (
        <Section fullScreen={false}>
            <Container maxWidth="1520px">
                <Typography variant="h2" color="commons.white" transformText="uppercase">
                    Our specialists
                </Typography>
                <Box mt={20} mb={180}>
                    <Slider
                        slidesPerView="auto"
                        shouldShrink
                        spaceBetween={isTablet ? 30 : 10}
                        sliderRef={sliderRef}
                        showOverflow
                    >
                        <SpecialistCard
                            name="Alex Slavinsky"
                            position="Designer"
                            links={{
                                linkedIn: 'http://linkedIn.com',
                                behance: 'http://behance.com',
                            }}
                        >
                            <StaticImage
                                src="../../../assets/images/specialists/alex.png"
                                alt="Designer"
                            />
                        </SpecialistCard>

                        <SpecialistCard
                            name="Alex Slavinsky"
                            position="Designer"
                            links={{
                                linkedIn: 'http://linkedIn.com',
                                behance: 'http://behance.com',
                            }}
                        >
                            <StaticImage
                                src="../../../assets/images/specialists/alex.png"
                                alt="Designer"
                            />
                        </SpecialistCard>

                        <SpecialistCard
                            name="Alex Slavinsky"
                            position="Designer"
                            links={{
                                linkedIn: 'http://linkedIn.com',
                                behance: 'http://behance.com',
                            }}
                        >
                            <StaticImage
                                src="../../../assets/images/specialists/alex.png"
                                alt="Designer"
                            />
                        </SpecialistCard>

                        <SpecialistCard
                            name="Alex Slavinsky"
                            position="Designer"
                            links={{
                                linkedIn: 'http://linkedIn.com',
                                behance: 'http://behance.com',
                            }}
                        >
                            <StaticImage
                                src="../../../assets/images/specialists/alex.png"
                                alt="Designer"
                            />
                        </SpecialistCard>

                        <SpecialistCard
                            name="Alex Slavinsky"
                            position="Designer"
                            links={{
                                linkedIn: 'http://linkedIn.com',
                                behance: 'http://behance.com',
                            }}
                        >
                            <StaticImage
                                src="../../../assets/images/specialists/alex.png"
                                alt="Designer"
                            />
                        </SpecialistCard>
                    </Slider>
                </Box>
            </Container>
        </Section>
    );
};

export default Specialists;
