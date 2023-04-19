import FocusTrap from 'focus-trap-react';
import { ReactElement, ReactNode, useEffect, forwardRef, ForwardedRef } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { variant } from 'styled-system';

import Box from '@components/atoms/Box';

import { ModalSize } from '@components/molecules/Modal/Modal';

import ModalHeader from './ModalHeader';

const modalSizeVariant = variant({
    prop: 'size',
    variants: {
        small: {
            height: 'max-content',
            width: '20rem',
            margin: '0 auto',
            borderRadius: '6px',
        },
        medium: {
            height: 'max-content',
            width: '30rem',
            margin: '0 auto',
            borderRadius: '8px',
        },
        big: {
            height: 'max-content',
            width: '71.875rem',
            margin: '0 auto',
            minHeight: '40rem',
            padding: '1.6rem 1.8rem 2.5rem',
            borderRadius: '8px',
        },
    },
});

const AnimatedBox = styled(animated(Box))<Pick<ModalBodyProps, 'size'>>`
    ${modalSizeVariant}
`;

interface ModalBodyProps {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
    actions?: ReactNode;
    size?: ModalSize;
    title?: string;
}

const ModalBody = (
    { isOpen, onClose, children, actions, size, title }: ModalBodyProps,
    ref: ForwardedRef<HTMLElement>,
): ReactElement => {
    const style = useSpring({
        from: {
            opacity: 0.5,
            y: 100,
        },
    });

    useEffect(() => {
        style.opacity.start(1);
        style.y.start(0);
    }, [isOpen]);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <FocusTrap
            active={isOpen}
            focusTrapOptions={{
                clickOutsideDeactivates: true,
                allowOutsideClick: true,
            }}
        >
            <AnimatedBox
                size={size}
                borderRadius={{ _: 0, laptopS: 8 }}
                width="100%"
                display="flex"
                flexDirection="column"
                p="1rem"
                ref={ref}
                style={style}
            >
                <ModalHeader title={title} onClose={onClose} />
                <RemoveScroll forwardProps>
                    <Box width="100%" maxHeight="100%" overflowY="auto" overflowX="hidden" flex={1}>
                        {children}
                    </Box>
                </RemoveScroll>
                {actions && <div>{actions}</div>}
            </AnimatedBox>
        </FocusTrap>
    );
};

export default forwardRef(ModalBody);
