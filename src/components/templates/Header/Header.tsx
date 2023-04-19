import { getClampValue } from '@utils/helpers';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import styled from 'styled-components';

import { useShowNav } from '@hooks';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';

import BurgerMenu from '@components/molecules/BurgerMenu/BurgerMenu';
import LogoWhite from '@components/molecules/Icons/LogoWhite';

import PageNavigation from '@components/organisms/PageNavigation';

const StyledHeader = styled.header<{ showNav: boolean }>`
    background: rgba(44, 48, 57, 0);
    height: 50px;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: background 0.4s ease, border-bottom 0.4s ease;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.header};

    ${({ showNav, theme }) =>
        !showNav &&
        `
        background: rgba(44, 48, 57, 0.6);
        border-bottom: 1px solid ${theme.colors.light.greyDark};
    `}

    ${mediaQueries.tablet} {
        height: 75px;
    }
`;

const StyledContainer = styled(Container)`
    padding: 0 var(--container-padding-x);
`;

const Header = () => {
    const { showNav } = useShowNav({ initial: true });
    const { isTablet } = useBreakpoint();

    return (
        <StyledHeader showNav={showNav}>
            <StyledContainer>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    height="100%"
                >
                    <Link to="/" color="#fff">
                        <LogoWhite
                            width={getClampValue('120px', '200px')}
                            height={getClampValue('14px', '23px')}
                        />
                    </Link>
                    <Box display="flex" gridGap="2rem" alignItems="center" position="relative">
                        {isTablet ? (
                            <>
                                <AnimatePresence>
                                    {showNav && (
                                        <motion.div
                                            initial={{
                                                y: !showNav ? 0 : -100,
                                                opacity: !showNav ? 1 : 0,
                                            }}
                                            animate={{
                                                y: showNav ? 0 : -100,
                                                opacity: showNav ? 1 : 0,
                                            }}
                                            exit={{
                                                y: !showNav ? 0 : -100,
                                                opacity: !showNav ? 1 : 0,
                                            }}
                                        >
                                            <PageNavigation />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <AnimatePresence>
                                    {!showNav && (
                                        <motion.div
                                            initial={{
                                                y: showNav ? 0 : 100,
                                                opacity: showNav ? 1 : 0,
                                            }}
                                            animate={{
                                                y: !showNav ? 0 : 100,
                                                opacity: !showNav ? 1 : 0,
                                            }}
                                            exit={{
                                                y: showNav ? 0 : 100,
                                                opacity: showNav ? 1 : 0,
                                                position: 'absolute',
                                                right: 0,
                                            }}
                                        >
                                            <BurgerMenu />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        ) : (
                            <BurgerMenu />
                        )}
                    </Box>
                </Box>
            </StyledContainer>
        </StyledHeader>
    );
};

export default Header;