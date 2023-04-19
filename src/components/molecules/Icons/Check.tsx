import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const Check = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 14 14" {...rest} fill="none">
        <path d="M1 9L4.5 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
);

export default Check;
