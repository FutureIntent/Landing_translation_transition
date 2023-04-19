import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const Achievments = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 60 60" {...rest} fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 56C44.3594 56 56 44.3594 56 30C56 15.6406 44.3594 4 30 4C15.6406 4 4 15.6406 4 30C4 44.3594 15.6406 56 30 56ZM30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
            fill="url(#paint0_linear_1442_7953)"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.4451 16.96C45.5718 17.758 45.8382 19.3184 45.0401 20.4451L27.3318 45.4451C26.8891 46.0699 26.1846 46.4575 25.4198 46.4967C24.6551 46.536 23.9145 46.2226 23.4103 45.6463L16.1186 37.3129C15.2094 36.2739 15.3147 34.6945 16.3538 33.7852C17.3929 32.876 18.9723 32.9813 19.8815 34.0204L25.0848 39.967L40.96 17.555C41.758 16.4283 43.3184 16.1619 44.4451 16.96Z"
            fill="url(#paint1_linear_1442_7953)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_1442_7953"
                x1="63"
                y1="25"
                x2="-6.24"
                y2="30"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#ACB4C3" />
                <stop offset="1" stopColor="#545962" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_1442_7953"
                x1="13"
                y1="31"
                x2="48.5"
                y2="29.5"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#ACB4C3" />
                <stop offset="1" stopColor="#545962" />
            </linearGradient>
        </defs>
    </Icon>
);

export default Achievments;
