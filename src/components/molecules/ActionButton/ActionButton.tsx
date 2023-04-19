import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { ReactElement, useState } from 'react';
import { Link as ScrollLink, LinkProps } from 'react-scroll';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import ButtonBase from '@components/atoms/ButtonBase/ButtonBase';
import Typography from '@components/atoms/Typography';

import ActionArrow from '@components/molecules/Icons/ActionArrow';

const StyledButton = styled(ButtonBase)<{ fullWidth: boolean }>`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.light.greyDark};
    display: flex;
    flex-shrink: 0;
    height: 50px;
    padding: 10px 20px;
    position: relative;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

    ${({ fullWidth }) => fullWidth && `
        justify-content: space-between;
    `}

    ${mediaQueries.tablet} {
        height: 60px;
    }
`;

const PreButton = styled(motion.div)`
    background: ${({ theme }) => theme.colors.gradient.actionButton};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 10px;
    z-index: 0;

    + span {
        z-index: 2;
    }
`;

const Btn = ({
    children,
    to,
    reactScroll,
    fullWidth,
    onHover,
    ...rest
}: {
    children: ReactElement;
    fullWidth: boolean;
    reactScroll?: boolean;
    onHover: () => void;
    to?: string;
}) => {
    if (to) {
        return (
            <StyledButton
                fullWidth={fullWidth}
                as={reactScroll ? ScrollLink : Link}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                to={to}
                {...rest}
            >
                {children}
            </StyledButton>
        );
    }

    return (
        <StyledButton
            fullWidth={fullWidth}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            type="button"
            {...rest}
        >
            {children}
        </StyledButton>
    );
};

const ActionButton = ({
    label = 'action',
    to,
    withArrow,
    reactScroll = false,
    fullWidth = false,
    ...rest
}: {
    label: string;
    to?: string;
    withArrow?: boolean;
    reactScroll?: boolean;
    fullWidth?: boolean;
} & Omit<LinkProps, 'to'>) => {
    const [isHover, setIsHover] = useState(false);

    const toggleHover = () => {
        setIsHover(!isHover);
    };

    return (
        <Btn
            to={to}
            fullWidth={fullWidth}
            reactScroll={reactScroll}
            {...rest}
            onHover={toggleHover}
        >
            <>
                <PreButton animate={{ width: isHover ? '100%' : '10px' }} />
                <Typography
                    variant="accent"
                    color="commons.white"
                    transformText="uppercase"
                    style={{ whiteSpace: 'nowrap' }}
                >
                    {label}
                </Typography>
                {withArrow && (
                    <Box ml={10} zIndex={2}>
                        <ActionArrow size="large" />
                    </Box>
                )}
            </>
        </Btn>
    );
};

export default ActionButton;
