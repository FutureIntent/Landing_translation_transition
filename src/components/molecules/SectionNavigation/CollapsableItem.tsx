import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';
import { fontsConfig } from '@components/atoms/Typography/Typography';

const Header = styled(Link)`
    background-color: transparent;
    padding: 0;
    position: relative;
    width: 22px;

    ${mediaQueries.tablet} {
        height: 40px;
    }
`;

const DotWrapper = styled.div<{ isOpen: boolean }>`
    align-items: center;
    background-color: transparent;
    display: flex;
    height: 22px;
    justify-content: center;
    width: 22px;

    ${({ isOpen, theme }) =>
        isOpen &&
        `
        border: 1px solid ${theme.colors.light.accent};
      border-radius: 50%;
      margin-top: 10px;
      position: relative;

      &:before {
            content: '';
            position: absolute;
            height: 5px;
            background-color: ${theme.colors.light.accent};
            width: 1px;
            top: -5px;
            left: calc(50% - 0.5px);
        }
    `}

    ${mediaQueries.tablet} {
        height: 40px;
        width: 40px;
    }
`;

const Dot = styled.div<{ isOpen: boolean; index: number }>`
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    overflow: visible;
    position: relative;

    ${({ isOpen, theme }) =>
        isOpen &&
        `
        background-color: ${theme.colors.light.accent};
        height: 16px;
        width: 16px;
    `}

    ${({ isOpen, theme }) =>
        !isOpen &&
        `
        background-color: transparent;
        height: 12px;
        width: 12px;
        border: 1px solid ${theme.colors.light.grey};
    `}

    ${mediaQueries.tablet} {
        ${({ isOpen }) =>
            isOpen &&
            `
        height: 26px;
        width: 26px;
    `}

        ${({ isOpen }) =>
            !isOpen &&
            `
        height: 20px;
        width: 20px;
    `}
    }
`;

const Label = styled.p`
    ${{ ...fontsConfig.paragraph }};
    color: ${({ theme }) => theme.colors.light.accent};
    margin-top: 1rem;
    text-transform: uppercase;
    transform: rotate(180deg);
    white-space: nowrap;
    writing-mode: vertical-lr;
`;

const CollapsableItem = ({ section, index, onClick, isOpen }: any) => {
    const handleClick = () => {
        onClick(index);
    };

    return (
        <Box as="li" display="flex" flexDirection="column" alignItems="center">
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto', overflow: 'unset' },
                            collapsed: { opacity: 0, height: 0, overflow: 'hidden' },
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Label as="span">
                            {section.label === 'home-page' ? 'intro' : section.label}
                        </Label>
                    </motion.div>
                )}
            </AnimatePresence>
            <Header
                onSetActive={handleClick}
                to={`${section.anchor}`}
                spy
                isDynamic
                hashSpy
                ignoreCancelEvents
                smooth
            >
                <DotWrapper isOpen={isOpen}>
                    <Dot index={index} isOpen={isOpen}>
                        {isOpen && (
                            <Typography
                                variant="caption"
                                fontSize={{ _: 9, tablet: 14 }}
                                color="light.white"
                            >
                                0{index + 1}
                            </Typography>
                        )}
                    </Dot>
                </DotWrapper>
            </Header>
        </Box>
    );
};

export default CollapsableItem;
