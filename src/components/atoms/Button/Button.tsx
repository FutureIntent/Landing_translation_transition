import { props as styledProps } from '@styled-system/should-forward-prop';
import { getClampValue } from '@utils/helpers';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant as styledVariant } from 'styled-system';

import colors from '@theme/configs/colors';

import ButtonBase from '@components/atoms/ButtonBase';

export type ButtonVariants = 'primary' | 'secondary' | 'transparent';

export interface ButtonProps extends SpaceProps, LayoutProps {
    variant?: ButtonVariants;
}

const variants = styledVariant({
    prop: 'variant',
    variants: {
        primary: {
            'color': 'commons.white',
            'backgroundColor': 'light.brandAccent',
            '&:hover': {
                backgroundColor: '#294FE5',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        secondary: {
            'color': 'light.brandAccent',
            'backgroundColor': 'transparent',
            'border': '1px solid #486DFF',
            '&:hover': {
                border: '1px solid #294FE5',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        transparent: {
            'color': 'light.grey',
            'backgroundColor': 'transparent',
            'border': '1px solid transparent',
            '&:hover': {
                color: colors.light.greyLight,
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
    },
});

const Button = styled(ButtonBase)
    .withConfig({
        shouldForwardProp: (prop) => ![...styledProps, 'width'].includes(String(prop)),
    })
    .attrs((props: ButtonProps) => ({
        variant: props.variant || 'primary',
    }))<ButtonProps>`
    flex-shrink: 0;
    white-space: nowrap;
    padding: ${getClampValue('5px', '12px')} ${getClampValue('10px', '17px')};
    display: flex;
    align-items: center;
    gap: 10px;
    ${variants};
    ${space};
    ${layout};

    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

    border-radius: ${({ theme }) => theme.space.xs};
`;

export default Button;
