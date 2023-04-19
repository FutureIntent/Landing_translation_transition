import { hexToRGB } from '@utils/helpers';
import { ComponentPropsWithRef, ForwardedRef, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import { StyledLabel, StyledLabelText } from '@components/atoms/Form/Label/Label';
import Typography from '@components/atoms/Typography';
import { fontsConfig } from '@components/atoms/Typography/Typography';

const StyledInputElement = styled.input`
    ${{ ...fontsConfig.paragraph }};
    background-color: rgba(${hexToRGB(colors.light.black)}, 0.75);
    color: ${({ theme }) => theme.colors.commons.white};
    min-height: 50px;
    overflow: hidden;
    padding: 21px 20px 8px;
    width: 100%;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.light.black} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.colors.commons.white}!important;
    }

    ${mediaQueries.tablet} {
        line-height: 21px;
    }

    ~ ${StyledLabel}
        ${StyledLabelText},
        &:not(:placeholder-shown)
        ~ ${StyledLabel}
        ${StyledLabelText} {
        color: ${({ theme }) => theme.colors.light.grey};
        ${{ ...fontsConfig.accent }};
    }

    &:focus
        ~ ${StyledLabel}
        ${StyledLabelText},
        &:not(:placeholder-shown)
        ~ ${StyledLabel}
        ${StyledLabelText} {
        transform: translateY(4px);
    }
`;

interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'placeholder'> {
    label?: string;
    error?: string;
    name: string;
    type?: 'text' | 'number' | 'password' | 'email' | 'tel';
    icon?: ReactNode;
    required?: boolean;
}

const Input = (
    { type = 'text', name, label, icon, error, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
) => (
    <Box display="flex" flexDirection="column" position="relative">
        <StyledInputElement type={type} name={name} ref={ref} {...rest} placeholder=" " />
        {label && (
            <StyledLabel htmlFor={name}>
                <StyledLabelText>{label}</StyledLabelText>
            </StyledLabel>
        )}
        {icon && (
            <Box position="absolute" bottom={12} right={18}>
                {icon}
            </Box>
        )}
        {!!error && (
            <Typography variant="caption" color="light.negative">
                {error}
            </Typography>
        )}
    </Box>
);

export default forwardRef(Input);
