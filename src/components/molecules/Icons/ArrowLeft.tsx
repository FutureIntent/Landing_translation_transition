import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const ArrowLeft = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 22 22" {...rest} fill="none">
        <path d="M11.0017 1.00342L1 11.0051L11.0017 21.0068" stroke="#ACB4C3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 11.0034H21" stroke="#ACB4C3" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
);

export default ArrowLeft;
