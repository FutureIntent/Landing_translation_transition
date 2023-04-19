import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const ArrowRight = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 22 22" {...rest} fill="none">
        <path d="M10.9973 21.0051L20.999 11.0034L10.9973 1.00168" stroke="#ACB4C3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.999 11.0051L0.999023 11.0051" stroke="#ACB4C3" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
);

export default ArrowRight;
