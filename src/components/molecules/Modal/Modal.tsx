import { ReactNode, SyntheticEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { useModalContext } from '@providers/ModalProvider';

import { useEventListener } from '@hooks';

import Box from '@components/atoms/Box';

import ModalBody from './ModalBody';

export type ModalSize = 'small' | 'medium' | 'big';

const BaseModalBackground = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.colors.gradient.background};
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 500;
`;
interface ModalProps {
    children: ReactNode;
    name: string;
    onClose: () => void;
    actions?: ReactNode;
    size?: ModalSize;
    title?: string;
}

const Modal = ({ children, name, onClose, size, actions, title }: ModalProps): null | any => {
    const { modalNode, type } = useModalContext();
    const targetElement = useRef<HTMLElement>(null);

    const close = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEventListener({
        eventName: 'keydown',
        listener: close,
        updateValue: type,
    });

    const handleOutside = (event: SyntheticEvent) => {
        const parentPosition = 10;
        const comparedPosition = targetElement.current?.compareDocumentPosition(
            event.target as Node,
        );

        if (comparedPosition === parentPosition) {
            onClose();
        }
    };

    if (modalNode && name === type) {
        return createPortal(
            <BaseModalBackground onMouseDown={handleOutside}>
                <Box maxWidth="900px" flexGrow={1} overflow="hidden" mb="10%">
                    <ModalBody
                        actions={actions}
                        isOpen={name === type}
                        onClose={onClose}
                        ref={targetElement}
                        size={size}
                        title={title}
                    >
                        {children}
                    </ModalBody>
                </Box>
            </BaseModalBackground>,
            modalNode,
        );
    }

    return null;
};

export default Modal;
