import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const MethodologyArrow = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30 30" {...rest} fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1ZM15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0Z"
            fill="black"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6454 21.3535C14.4502 21.1582 14.4502 20.8417 14.6455 20.6464L20.2928 15L14.6455 9.35358C14.4502 9.15834 14.4502 8.84175 14.6454 8.64648C14.8406 8.4512 15.1572 8.45117 15.3525 8.64642L21.3535 14.6464C21.4473 14.7402 21.5 14.8674 21.5 15C21.5 15.1326 21.4473 15.2598 21.3535 15.3536L15.3525 21.3536C15.1572 21.5488 14.8406 21.5488 14.6454 21.3535Z"
            fill="black"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.5 15.002C21.5 15.2781 21.2761 15.502 21 15.502L9 15.502C8.72386 15.502 8.5 15.2781 8.5 15.002C8.5 14.7258 8.72386 14.502 9 14.502L21 14.502C21.2761 14.502 21.5 14.7258 21.5 15.002Z"
            fill="black"
        />
    </Icon>
);

export default MethodologyArrow;
