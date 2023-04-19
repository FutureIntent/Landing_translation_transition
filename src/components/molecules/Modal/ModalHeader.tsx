import { ReactElement } from 'react';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

import CloseIcon from '@components/molecules/Icons/CloseIcon';

interface ModalHeaderProps {
    title?: string;
    onClose: () => void;
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps): ReactElement => (
    <Box
        display="flex"
        justifyContent={title ? 'space-between' : 'flex-end'}
        position="relative"
        alignItems="center"
        width="100%"
        padding={{ _: '0', laptopS: '0.5rem 1rem' }}
        minHeight={{ _: title ? '2.5rem' : '0', laptopS: '2.5rem' }}
    >
        <Box>
            {title && (
                <Typography variant="h3" transformText="uppercase" color="commons.white">
                    {title}
                </Typography>
            )}
        </Box>
        <Button variant="transparent" size="extraSmall" onClick={onClose}>
            <CloseIcon size="large3" />
        </Button>
    </Box>
);

export default ModalHeader;
