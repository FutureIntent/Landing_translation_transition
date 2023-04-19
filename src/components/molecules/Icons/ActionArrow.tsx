import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const ActionArrow = ({ size, color = 'white', ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 31 30" {...rest} color={color} fill="none">
        <>
            <circle
                cx="15.459"
                cy="15"
                r="14.5"
                transform="rotate(-180 15.459 15)"
                stroke="currentColor"
            />
            <path
                d="M15.458 21L21.459 15L15.458 9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.459 15.002L9.45898 15.002"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </>
    </Icon>
);

export default ActionArrow;
