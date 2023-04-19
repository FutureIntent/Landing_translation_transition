import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import { ReactElement, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ActionArrow from '@components/molecules/Icons/ActionArrow';

const Card = styled(animated.div)`
    background-color: ${({ theme }) => theme.colors.light.f6f6};
    border-radius: 10px;
    filter: grayscale(100%);
    height: auto;
    max-width: 590px;
    position: relative;
    transition: filter 0.2s ease-in-out;
    width: 100%;

    &:hover {
        filter: grayscale(0);
    }

    p {
        z-index: 10;
    }
`;

const MenuCard = ({
    linkTo,
    ratio,
    children,
    label,
}: {
    linkTo: string;
    ratio: number;
    children: ReactElement;
    label: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const [animatedProps, setAnimatedProps] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 400, friction: 40, precision: 0.00001 },
    }));

    const handleMouseMove = ({ clientX, clientY }: { clientX: number; clientY: number }) => {
        if (!ref?.current) return;

        const x = clientX - ref.current.offsetLeft;
        const y = clientY - ref.current.offsetTop;
        const dampen = 50;
        const xys = [
            -(y - ref.current.clientHeight / 2) / dampen,
            (x - ref.current.clientWidth / 2) / dampen,
            1.07,
        ];

        setAnimatedProps({ xys });
    };

    return (
        <Card
            ref={ref}
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setIsHovered(false);
                setAnimatedProps({ xys: [0, 0, 1] });
            }}
            style={{
                zIndex: isHovered ? 2 : 1,
                transform: animatedProps.xys.interpolate(
                    (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`,
                ),
            }}
        >
            <Link to={linkTo}>
                <AspectRatio ratio={ratio}>
                    <Box
                        height="100%"
                        width="100%"
                        display="flex"
                        alignItems="flex-end"
                        position="relative"
                        p={{ _: '15px 30px', tablet: '20px 30px' }}
                        gridGap={10}
                    >
                        {children}

                        <Box
                            display="flex"
                            width="100%"
                            alignItems="center"
                            height={40}
                            gridGap={10}
                        >
                            <Box
                                as={motion.div}
                                animate={{ width: isHovered ? '100%' : '0%' }}
                            ></Box>
                            <Typography
                                variant="h4"
                                color="commons.white"
                                transformText="uppercase"
                            >
                                {label}
                            </Typography>

                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        style={{ zIndex: 10000 }}
                                        initial={{ opacity: isHovered ? 0 : 1 }}
                                        animate={{ opacity: isHovered ? 1 : 0 }}
                                        exit={{ opacity: isHovered ? 0 : 1 }}
                                    >
                                        <ActionArrow size="medium3" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Box>
                    </Box>
                </AspectRatio>
            </Link>
        </Card>
    );
};

export default MenuCard;
