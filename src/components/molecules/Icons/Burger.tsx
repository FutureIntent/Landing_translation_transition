import { gsap } from 'gsap';
import { ReactElement, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

import Icon, { IconProps } from '../../atoms/Icon';

const Burger = ({ size, isOpen, ...rest }: IconProps & { isOpen: boolean }): ReactElement => {
    const { x } = useSpring({ config: { duration: 800 }, x: isOpen ? 1 : 0 });

    useEffect(() => {
        gsap.to('#top-bur', {
            rotate: isOpen ? 45 : 0,
        });
        gsap.to('#middle-bur', {
            x: isOpen ? '120%' : '0%',
        });
        gsap.to('#bottom-bur', {
            rotate: isOpen ? -45 : 0,
        });
        gsap.to('#dot-bur', {
            height: isOpen ? 0 : 9,
            opacity: isOpen ? 0 : 1,
        });
    }, [isOpen]);

    return (
        <>
            <Icon size={size} viewBox="0 0 51 36" {...rest}>
                <animated.path
                    id="top-bur"
                    d={x.to({
                        range: [0, 1],
                        output: [
                            'M0.311035 0.5H50.311V5.5H5.31104L0.311035 0.5Z',
                            'M0.311035 -0.5H54.311V5.5H5.31104L5.311035 -0.5Z',
                        ],
                    })}
                    fill="currentColor"
                />
                <path
                    id="middle-bur"
                    d="M5.31104 15.5H50.311V20.5H10.311L5.31104 15.5Z"
                    fill="currentColor"
                />
                <animated.path
                    id="bottom-bur"
                    d={x.to({
                        range: [0, 1],
                        output: [
                            'M10.311 30.5H50.311V35.5H15.311L10.311 30.5Z',
                            'M10.311 29.5H47.311V35.5H-1.311L-1 30.5Z',
                        ],
                    })}
                    fill="currentColor"
                />
                <rect id="dot-bur" x="45.311" y="0.5" width="5" height="9" fill="currentColor" />
            </Icon>
        </>
    );
};

export default Burger;
