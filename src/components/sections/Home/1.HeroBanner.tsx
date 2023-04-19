import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { useModal } from '@hooks';

import appTheme from '@theme/configs';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Form from '@components/atoms/Form/Form';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import ActionButton from '@components/molecules/ActionButton';
import ActionArrow from '@components/molecules/Icons/ActionArrow';
import Modal from '@components/molecules/Modal';
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Wrapper = styled(Section)`
    background-color: #0c0c0c;
    height: 100vh;
    min-height: 570px;
    position: sticky;
    top: 0;
`;

const BgImage = styled.div`
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
`;

const HeroBanner = () => {
    const { openModal, closeModal } = useModal('modalForm');

    const {t} = useTranslation();

    return (
        <Wrapper id="intro" className="panel">
            <Container isHomePage>
                <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                    <Box
                        zIndex={appTheme.zIndices.stepUp}
                        mt={{ _: '-20rem', laptop: '-10rem' }}
                        maxWidth={{ _: '100%', tablet: '50%' }}
                    >
                        <Typography
                            opacity="50%"
                            variant="h4"
                            color="light.grey"
                            transformText="uppercase"
                        >
                            {t('intro.span1')}
                        </Typography>
                        <Box display={{ _: 'block', tabletL: 'flex' }} flexWrap="wrap">
                            <Typography variant="h2" as="h1" color="light.grey">
                                {t('intro.span2')}&nbsp;
                            </Typography>

                            <Typography
                                as="span"
                                variant="h2"
                                color="commons.white"
                                style={{ whiteSpace: 'nowrap' }}
                            >
                                {t('intro.span3')}
                            </Typography>

                            <Box
                                mt={60}
                                display="flex"
                                flexWrap="wrap"
                                alignItems="center"
                                gridGap={30}
                            >
                                <ActionButton
                                    onClick={openModal}
                                    label={t('intro.label')}
                                />
                                {/* <ActionButton */}
                                {/*    to="services" */}
                                {/*    reactScroll */}
                                {/*    offset={-200} */}
                                {/*    spy */}
                                {/*    isDynamic */}
                                {/*    hashSpy */}
                                {/*    ignoreCancelEvents */}
                                {/*    smooth */}
                                {/*    label="Browse services" */}
                                {/* /> */}

                                <ScrollLink to="services"
                                    spy
                                    isDynamic
                                    hashSpy
                                    ignoreCancelEvents
                                    smooth
                                >
                                    <Box display="flex" flexWrap="wrap" gridGap={15} alignItems="center">
                                        <Typography variant="accent" color="light.grey">
                                            {t('intro.link')}
                                        </Typography>{' '}
                                        <ActionArrow size="large" />
                                    </Box>
                                </ScrollLink>
                            </Box>
                        </Box>
                    </Box>

                    <BgImage>
                        <StaticImage
                            style={{
                                height: '100%',
                                left: '20%',
                            }}
                            quality={100}
                            loading="eager"
                            src="../../../assets/images/main_bg.jpg"
                            alt="background image"
                        />
                    </BgImage>
                </Box>
            </Container>
            <Modal name="modalForm" onClose={closeModal} title="Request project">
                <Form
                    fullWidthBtn
                    subTitle="describe works and/or projects you’d like to make with us"
                />
            </Modal>
        </Wrapper>
    );
};

export default HeroBanner;