import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const CloseIcon = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 44 43" {...rest} fill="none">
        <path d="M2 1.5L42 41.5" stroke="#F5F6FC" strokeWidth="3" />
        <path d="M2 41.5L42 1.5" stroke="#F5F6FC" strokeWidth="3" />
    </Icon>
);

export default CloseIcon;
