import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const Cross = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30 30" {...rest} fill="none">
        <path d="M15 0V30" stroke="#D5D9E1" strokeWidth="2" />
        <path d="M0 15L30 15" stroke="#D5D9E1" strokeWidth="2" />
    </Icon>
);

export default Cross;
