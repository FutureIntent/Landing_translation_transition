import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const Envelope = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 45 36" {...rest} fill="none">
        <path d="M40.5 0H4.5C2.025 0 0.0225 2.025 0.0225 4.5L0 31.5C0 33.975 2.025 36 4.5 36H40.5C42.975 36 45 33.975 45 31.5V4.5C45 2.025 42.975 0 40.5 0ZM40.5 9L22.5 20.25L4.5 9V4.5L22.5 15.75L40.5 4.5V9Z" fill="#D5D9E1"/>
    </Icon>
);

export default Envelope;
