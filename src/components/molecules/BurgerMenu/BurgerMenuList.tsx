import { AnimatePresence, motion } from 'framer-motion';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';

import MenuCard from '@components/molecules/BurgerMenu/MenuCard';

const Overlay = styled(motion.div)`
    align-items: center;
    background: ${({ theme }) => theme.colors.gradient.background};
    display: flex;
    height: 100%;
    left: 0;
    min-height: 100vh;
    overflow-y: auto;
    padding: 75px 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 10000;

    ${mediaQueries.tablet} {
        padding: 210px 0;
    }
`;

const CustomContainer = styled(Container)`
    height: unset;
`;

const BurgerMenuList = ({ isOpen }: { isOpen: boolean }) => {
    const { isTablet } = useBreakpoint();

    return (
        <AnimatePresence>
            {isOpen && (
                <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <CustomContainer>
                        <Box
                            display="flex"
                            justifyContent="center"
                            flexDirection="column"
                            alignItems="center"
                            width="100%"
                            height="100%"
                        >
                            <Box
                                maxWidth={590}
                                minWidth={290}
                                width="100%"
                                display="flex"
                                flexDirection="column"
                                gridGap={10}
                                flexWrap={{ _: 'wrap', tablet: 'nowrap' }}
                            >
                                <MenuCard
                                    linkTo="/works"
                                    ratio={!isTablet ? 290 / 100 : 590 / 290}
                                    label="Works"
                                >
                                    <StaticImage
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            height: '100%',
                                            width: '100%',
                                        }}
                                        loading="eager"
                                        src="../../../assets/images/menu/works.png"
                                        alt="background image"
                                    />
                                </MenuCard>
                                <Box
                                    width="100%"
                                    display="flex"
                                    gridGap={10}
                                    minWidth={290}
                                    flexDirection={{ _: 'column', tablet: 'row' }}
                                >
                                    <MenuCard
                                        linkTo="/careers"
                                        ratio={!isTablet ? 290 / 100 : 290 / 360}
                                        label="Careers"
                                    >
                                        <StaticImage
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                height: '100%',
                                                width: '100%',
                                            }}
                                            loading="eager"
                                            src="../../../assets/images/menu/careers.png"
                                            alt="background image"
                                        />
                                    </MenuCard>

                                    <Box
                                        width="100%"
                                        display="flex"
                                        gridGap={10}
                                        flexDirection="column"
                                        minWidth={290}
                                    >
                                        <MenuCard
                                            linkTo="/company"
                                            ratio={!isTablet ? 290 / 100 : 290 / 175}
                                            label="Company"
                                        >
                                            <StaticImage
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    height: '100%',
                                                    width: '100%',
                                                }}
                                                loading="eager"
                                                src="../../../assets/images/menu/company.png"
                                                alt="background image"
                                            />
                                        </MenuCard>

                                        <MenuCard
                                            linkTo="/contacts"
                                            ratio={!isTablet ? 290 / 100 : 290 / 175}
                                            label="Contacts"
                                        >
                                            <StaticImage
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    height: '100%',
                                                    width: '100%',
                                                }}
                                                loading="eager"
                                                src="../../../assets/images/menu/contacts.png"
                                                alt="background image"
                                            />
                                        </MenuCard>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </CustomContainer>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default BurgerMenuList;
