import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const Facebook = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 50 50" {...rest}>
        <path
            d="M21.9651 37H26.8088V24.9035H30.1666L30.5276 20.8405H26.8088V18.532C26.8088 17.575 27.0019 17.1973 27.9253 17.1973H30.5528V13H27.195C23.5853 13 21.9651 14.595 21.9651 17.6338V20.8741H19.4468V24.9874H21.9651V37Z"
            fill="#A7ABCC"
        />
        <rect x="0.5" y="0.5" width="49" height="49" rx="3.5" stroke="#A7ABCC" />
    </Icon>
);

export default Facebook;
